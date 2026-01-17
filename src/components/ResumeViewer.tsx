"use client";

import { useEffect, useRef } from "react";
import PDFViewer from "pdf-viewer";

export default function ResumeViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new PDFViewer({
      container: containerRef.current,
      url: "/resume.pdf",
      scale: "page-width",
    });

    return () => {
      viewer?.destroy?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-neutral-900"
    />
  );
}
