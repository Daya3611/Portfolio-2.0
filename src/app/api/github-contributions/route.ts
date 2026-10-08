import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "Daya3611";

  try {
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`GitHub responded with status ${res.status}`);
    }

    const html = await res.text();
    const tdMatches = html.match(/<td[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>/g) || [];
    
    const daysData: { date: string; level: number; count: number }[] = [];

    tdMatches.forEach((tag) => {
      const dateMatch = tag.match(/data-date="(\d{4}-\d{2}-\d{2})"/);
      const levelMatch = tag.match(/data-level="(\d+)"/);
      const idMatch = tag.match(/id="([^"]+)"/);

      if (dateMatch && levelMatch) {
        const date = dateMatch[1];
        const level = parseInt(levelMatch[1], 10);
        const id = idMatch ? idMatch[1] : "";

        let count = 0;
        if (id) {
          const tooltipMatch = html.match(new RegExp(`<tool-tip[^>]*for="${id}"[^>]*>([\\s\\S]*?)</tool-tip>`));
          if (tooltipMatch) {
            const text = tooltipMatch[1].trim();
            const countMatch = text.match(/^(\d+)\s+contribution/i);
            if (countMatch) {
              count = parseInt(countMatch[1], 10);
            }
          }
        }

        if (count === 0 && level > 0) {
          count = level * 2;
        }

        daysData.push({ date, level, count });
      }
    });

    const totalMatch = html.match(/(\d[\d,]*)\s+contributions/i);
    let totalContributions = daysData.reduce((acc, d) => acc + d.count, 0);
    if (totalMatch && parseInt(totalMatch[1].replace(/,/g, ""), 10) > 0) {
      totalContributions = parseInt(totalMatch[1].replace(/,/g, ""), 10);
    }

    // Group into weeks (7 days each)
    const weeks: typeof daysData[] = [];
    for (let i = 0; i < daysData.length; i += 7) {
      weeks.push(daysData.slice(i, i + 7));
    }

    // Calculate month labels with minimum 3-week spacing to prevent overlapping
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const months: { label: string; weekIndex: number }[] = [];
    let lastMonth = -1;
    let lastWeekIndex = -5;

    weeks.forEach((week, index) => {
      if (week[0]) {
        const d = new Date(week[0].date);
        const m = d.getMonth();
        if (m !== lastMonth && (index - lastWeekIndex) >= 3) {
          months.push({ label: monthNames[m], weekIndex: index });
          lastMonth = m;
          lastWeekIndex = index;
        }
      }
    });

    return NextResponse.json(
      {
        username,
        totalContributions,
        days: daysData,
        weeks,
        months,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions", message: error.message },
      { status: 500 }
    );
  }
}
