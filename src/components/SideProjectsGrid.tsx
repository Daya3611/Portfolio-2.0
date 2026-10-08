"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface SideProject {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const sideProjects: SideProject[] = [
  {
    slug: "doodhos",
    title: "DoodhOS — Milk Collection SaaS",
    description: "Multi-tenant SaaS platform for dairy collection centers with offline billing, fat/SNF calculations, and analytics.",
    image: "/doodhos.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    link: "https://doodhos.dayanandgawade.in",
  },
  {
    slug: "hirelens",
    title: "HireLens — AI Resume Builder",
    description: "AI-assisted resume editor with real-time ATS scoring, recruiter-approved templates, and smart bullet point generation.",
    image: "/hirelence.png",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    link: "https://hirelens.dayanandgawade.in",
  },
  {
    slug: "accrual",
    title: "Accrual — Smart Billing Platform",
    description: "Invoicing and customer management tool for small businesses featuring GST-ready PDF generation.",
    image: "/accrual.png",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://billgenrator.dayanandgawade.in/",
  },
  {
    slug: "skybox",
    title: "SkyBox — Cloud Storage Platform",
    description: "Secure cloud storage platform with OTP authentication, file sharing, and permission management.",
    image: "/skybox.png",
    tags: ["Next.js", "Appwrite", "TypeScript", "Tailwind CSS"],
    link: "https://skybox.dayanandgawade.in",
  },
];

export default function SideProjectsGrid() {
  return (
    <section id="side-projects" className="py-8 border-t border-border">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground tracking-tight">
          Side Projects
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          Some things I&apos;ve built outside of my main work.
        </p>
      </div>

      {/* 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sideProjects.map((project) => (
          <a
            key={project.slug}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block outline-none"
          >
            <Card className="h-full bg-card border-border hover:border-zinc-700 transition-all rounded-2xl overflow-hidden py-0 shadow-none">
              {/* Image Preview Container */}
              <div className="relative w-full h-40 bg-zinc-950 border-b border-border overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Card Body */}
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-sm font-semibold text-foreground group-hover:text-white transition-colors truncate">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                </div>
                <CardDescription className="text-xs text-muted-foreground leading-relaxed mt-1 line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-[10px] font-mono text-muted-foreground border-border bg-zinc-950/60 rounded-full px-2.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
