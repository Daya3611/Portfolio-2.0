"use client";

import React, { useEffect, useState, useMemo } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface ContributionDay {
  date: string;
  level: number;
  count: number;
}

interface ContributionData {
  totalContributions: number;
  weeks: ContributionDay[][];
  months: { label: string; weekIndex: number }[];
}

export default function ActivityHeatmap() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchGitHubData() {
      try {
        const res = await fetch("/api/github-contributions?username=Daya3611");
        if (res.ok) {
          const json = await res.json();
          if (json.weeks && isMounted) {
            setData({
              totalContributions: json.totalContributions,
              weeks: json.weeks,
              months: json.months,
            });
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to load GitHub activity:", err);
      }
      if (isMounted) setLoading(false);
    }

    fetchGitHubData();
    return () => {
      isMounted = false;
    };
  }, []);

  const fallbackData = useMemo(() => {
    const totalDays = 52 * 7;
    const daysData: ContributionDay[] = [];
    const today = new Date();
    let sum = 0;

    for (let i = totalDays - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const dayOfWeek = d.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const seed = (d.getFullYear() * 1000 + d.getMonth() * 100 + d.getDate() * 7) % 100;

      let count = 0;
      if (!isWeekend && seed % 2 === 0) {
        count = (seed % 6) + 1;
      }

      sum += count;
      let level = 0;
      if (count > 0 && count <= 2) level = 1;
      else if (count > 2 && count <= 5) level = 2;
      else if (count > 5 && count <= 8) level = 3;
      else if (count > 8) level = 4;

      daysData.push({ date: dateStr, count, level });
    }

    const weeksArr: ContributionDay[][] = [];
    for (let w = 0; w < 52; w++) {
      weeksArr.push(daysData.slice(w * 7, (w + 1) * 7));
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthLabels: { label: string; weekIndex: number }[] = [];
    let lastMonth = -1;
    let lastWeekIndex = -5;

    weeksArr.forEach((week, index) => {
      if (week[0]) {
        const m = new Date(week[0].date).getMonth();
        if (m !== lastMonth && (index - lastWeekIndex) >= 3) {
          monthLabels.push({ label: monthNames[m], weekIndex: index });
          lastMonth = m;
          lastWeekIndex = index;
        }
      }
    });

    return { weeks: weeksArr, totalContributions: sum, months: monthLabels };
  }, []);

  const activeData = data || fallbackData;

  // Map week indices to month labels for column-by-column header rendering
  const monthMap = useMemo(() => {
    const map = new Map<number, string>();
    activeData.months.forEach((m) => {
      map.set(m.weekIndex, m.label);
    });
    return map;
  }, [activeData.months]);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#3f3f46] border-[#52525b]/60";
      case 2:
        return "bg-[#71717a] border-[#a1a1aa]/60";
      case 3:
        return "bg-[#a1a1aa] border-[#d4d4d8]/60";
      case 4:
        return "bg-[#e4e4e7] border-white";
      default:
        return "bg-[#1c1c1f] border-[#27272a]/50";
    }
  };

  return (
    <TooltipProvider>
      <div className="my-6 p-4 sm:p-5 rounded-2xl bg-[#121215] border border-border select-none">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 font-mono">
          <span>
            {loading ? (
              <span className="animate-pulse">Loading live GitHub activity...</span>
            ) : (
              `${activeData.totalContributions.toLocaleString()} contributions in the last year`
            )}
          </span>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#1c1c1f] border border-[#27272a]/50" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#3f3f46] border border-[#52525b]/60" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#71717a] border border-[#a1a1aa]/60" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#a1a1aa] border border-[#d4d4d8]/60" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[#e4e4e7] border border-white" />
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Grid with Y-Axis Day Labels */}
        <div className="overflow-x-auto no-scrollbar pb-1">
          <div className="inline-flex flex-col min-w-max">
            {/* Top Month Header Aligned Column by Column */}
            <div className="flex gap-[3.5px] text-[10px] text-muted-foreground font-mono mb-2 pl-[36px] h-4">
              {activeData.weeks.map((_, wIndex) => {
                const monthName = monthMap.get(wIndex);
                return (
                  <div key={wIndex} className="w-[11px] shrink-0 relative">
                    {monthName && (
                      <span className="absolute left-0 top-0 whitespace-nowrap text-[10px] font-mono text-muted-foreground/80">
                        {monthName}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Main Heatmap: Day Labels Column + Weeks Columns */}
            <div className="flex gap-2 items-start">
              {/* Left Y-Axis Day Labels: TUE, THU, SAT */}
              <div className="flex flex-col gap-[3.5px] text-[9px] font-mono text-muted-foreground/70 justify-between h-[98px] pr-1 py-[1px] shrink-0 w-[28px] select-none">
                <span className="h-[11px] flex items-center"></span>
                <span className="h-[11px] flex items-center"></span>
                <span className="h-[11px] flex items-center">TUE</span>
                <span className="h-[11px] flex items-center"></span>
                <span className="h-[11px] flex items-center">THU</span>
                <span className="h-[11px] flex items-center"></span>
                <span className="h-[11px] flex items-center">SAT</span>
              </div>

              {/* Weeks Columns */}
              <div className="flex gap-[3.5px]">
                {activeData.weeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-[3.5px]">
                    {week.map((day, dIndex) => (
                      <Tooltip key={day.date || `${wIndex}-${dIndex}`}>
                        <TooltipTrigger asChild>
                          <div
                            className={`w-[11px] h-[11px] rounded-[3px] border transition-colors ${getLevelColor(
                              day.level
                            )}`}
                          />
                        </TooltipTrigger>
                        <TooltipContent side="top" className="rounded-md">
                          {day.count > 0
                            ? `${day.count} contribution${day.count > 1 ? "s" : ""} on ${day.date}`
                            : `No contributions on ${day.date}`}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
