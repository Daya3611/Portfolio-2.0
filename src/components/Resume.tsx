"use client";

import { Card, CardContent } from "@/components/ui/card";
import { IconDownload } from "@tabler/icons-react";

export default function Resume() {
  return (
    <Card className="w-full bg-neutral-900 border-neutral-800 text-white rounded-xl overflow-hidden border-0 shadow-none flex flex-col">

      {/* ================= VIEWER ================= */}
      <CardContent className="p-0 bg-neutral-900 flex-1">

        {/* MOBILE IMAGE VIEW */}
        <div className="block md:hidden w-full h-[65vh] overflow-y-auto px-4 py-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <img
            src="/resume.jpg"
            alt="Resume preview"
            className="
              w-full
              h-auto
              bg-white
              rounded-xl
              shadow-xl
            "
          />
        </div>

        {/* DESKTOP PDF VIEW */}
        <div className="hidden md:block w-full h-[73vh]">
          <iframe
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            className="w-full h-full rounded-t-xl"
            title="Resume PDF Viewer"
          />
        </div>

      </CardContent>

      {/* ================= DOWNLOAD BAR ================= */}
      <div className="w-full border-t border-neutral-800 bg-neutral-900 flex justify-center">
        <a
          href="/resume.pdf"
          download
          className="
            inline-flex items-center gap-2
            px-6 py-2.5
            rounded-full
            bg-neutral-800 hover:bg-neutral-700
            border border-neutral-700
            text-sm
            transition
          "
        >
          <IconDownload size={16} />
          Download PDF
        </a>
      </div>

    </Card>
  );
}
