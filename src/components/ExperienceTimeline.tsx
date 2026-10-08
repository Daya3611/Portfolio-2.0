"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

const experiencesData: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Qrapid Technologies LLP",
    type: "Full-Time",
    period: "May 2026 — Present",
    location: "Mumbai, India",
    description: "Developing and maintaining production-grade web applications with a focus on clean architecture, performance optimization, and responsive design systems.",
    responsibilities: [
      "Built responsive, component-driven user interfaces using Next.js, React, and Tailwind CSS.",
      "Translated complex Figma designs into high-performance, accessible frontend code.",
      "Integrated RESTful APIs and optimized client-side state management for seamless UX.",
      "Collaborated with backend engineers and product teams to ship weekly feature iterations."
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Git"],
    current: true,
  },
  {
    role: "Web Developer & Designer",
    company: "Agricart Farmers Producer Co. Ltd.",
    type: "Full-Time",
    period: "May 2024 — May 2025",
    location: "India",
    description: "Designed and developed e-commerce platforms, customer web portals, and administrative management dashboards.",
    responsibilities: [
      "Engineered an e-commerce platform and marketing portal using Next.js, Tailwind CSS, and Firebase.",
      "Constructed an internal admin dashboard for product catalog management and order processing.",
      "Improved web accessibility and responsive layouts across mobile and desktop viewports."
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Firebase", "TypeScript"],
    current: false,
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-8">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground tracking-tight">
          Experience
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Professional timeline and work achievements
        </p>
      </div>

      {/* Accordion Timeline Container */}
      <div className="relative border-l border-border ml-3 pl-6 space-y-4">
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
          {experiencesData.map((exp, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-border rounded-2xl bg-card overflow-hidden transition-colors relative group shadow-none"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[31px] top-5 w-2.5 h-2.5 rounded-full bg-muted-foreground/60 border-2 border-background group-hover:bg-foreground transition-colors z-10" />

              {/* Unified Header Trigger */}
              <AccordionTrigger className="px-5 py-4 hover:no-underline text-left group/trigger cursor-pointer transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-3 gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-semibold text-foreground group-hover/trigger:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-medium text-muted-foreground">
                        @ {exp.company}
                      </span>
                      {exp.current && (
                        <Badge variant="outline" className="text-[10px] py-0 px-2 border-border text-foreground font-mono rounded-full">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mt-1">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <Badge variant="secondary" className="w-fit text-[11px] font-mono text-muted-foreground bg-muted border border-border rounded-full px-3">
                    {exp.type}
                  </Badge>
                </div>
              </AccordionTrigger>

              {/* Accordion Content Body */}
              <AccordionContent className="px-5 pb-5 pt-3 border-t border-border/40 space-y-3">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements Bullets */}
                <ul className="space-y-1.5 text-xs text-foreground/90">
                  {exp.responsibilities.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-1 select-none">•</span>
                      <span className="leading-normal">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[10px] font-mono text-muted-foreground border-border bg-zinc-950/60 rounded-full px-2.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
