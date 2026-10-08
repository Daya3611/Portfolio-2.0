import React from "react";
import HeaderIntro from "@/components/HeaderIntro";
import ActivityHeatmap from "@/components/ActivityHeatmap";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SideProjectsGrid from "@/components/SideProjectsGrid";
import ProjectsDirectory from "@/components/ProjectsDirectory";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
        <HeaderIntro />
        <ActivityHeatmap />
        <ExperienceTimeline />
        <SideProjectsGrid />
        <ProjectsDirectory />
        <ContactFooter />
      </div>
    </main>
  );
}
