"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star } from "lucide-react";

interface GridProject {
  title: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  link: string;
}

const projectsList: GridProject[] = [
  {
    title: "DoodhOS",
    description: "Multi-tenant SaaS platform for dairy collection centers with offline billing, fat/SNF calculations, and analytics.",
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 18,
    link: "https://doodhos.dayanandgawade.in",
  },
  {
    title: "HireLens",
    description: "AI-powered resume builder with real-time ATS scoring analysis, recruiter templates, and bullet point generation.",
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 24,
    link: "https://hirelens.dayanandgawade.in",
  },
  {
    title: "Accrual",
    description: "Cloud billing and invoicing platform for small businesses with customer insights dashboard and PDF exports.",
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 15,
    link: "https://billgenrator.dayanandgawade.in/",
  },
  {
    title: "SkyBox Cloud Storage",
    description: "Secure cloud storage platform with OTP authentication, drag-and-drop uploads, and permission-based sharing.",
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 32,
    link: "https://skybox.dayanandgawade.in",
  },
  {
    title: "Toolbox Utilities",
    description: "Privacy-focused developer utilities dashboard running client-side formatters, converters, and code helpers.",
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 12,
    link: "https://github.com/Daya3611",
  },
  {
    title: "TaskFlow Manager",
    description: "Developer task & workflow productivity manager built for agile sprint tracking and personal organization.",
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: 10,
    link: "https://github.com/Daya3611",
  },
];

export default function ProjectsDirectory() {
  return (
    <section id="projects" className="py-8 border-t border-border">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground tracking-tight">
            Projects
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            My projects, feeding live from git pin.
          </p>
        </div>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="rounded-full text-xs text-muted-foreground hover:text-foreground px-3.5 h-8 border-border bg-card"
        >
          <a
            href="https://github.com/Daya3611"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
          >
            <span>View All</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </Button>
      </div>

      {/* Grid Outer Card Container */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-none">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projectsList.map((project, idx) => {
            const isLastRowOnDesktop = idx >= projectsList.length - 2;
            const isOddIndexOnDesktop = idx % 2 === 0;

            return (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-5 flex flex-col justify-between hover:bg-muted/40 transition-colors border-b border-border ${
                  isLastRowOnDesktop ? "md:border-b-0" : ""
                } ${isOddIndexOnDesktop ? "md:border-r md:border-border" : ""}`}
              >
                <div>
                  {/* Title & Arrow Row */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-white transition-colors truncate">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2 mb-4 line-clamp-2 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Metadata: Language & Stars */}
                <div className="flex items-center gap-4 text-[11px] text-muted-foreground font-mono mt-auto">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${project.languageColor}`} />
                    {project.language}
                  </span>

                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-muted-foreground" />
                    {project.stars} stars
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
