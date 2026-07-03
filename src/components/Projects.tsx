"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const filterOptions = ["All", "AI", "Full Stack", "SaaS", "Open Source"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" ref={ref} className="py-24 bg-[#050505]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Projects
            </h2>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              Some of my active builds and open-source contributions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-wrap gap-2 p-1.5 bg-[#0B0B0B] border border-white/10 rounded-2xl w-fit backdrop-blur-md"
            role="tablist"
            aria-label="Project filter"
          >
            {filterOptions.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={activeFilter === f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-[13px] font-semibold rounded-full transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-white text-black shadow-lg"
                    : "text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            role="tabpanel"
          >
            {filtered.map((project, i) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group relative block h-full outline-none"
              >
                <CardSpotlight className="h-full bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col hover:border-slate-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-slate-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-slate-500/20 group-hover:scale-110 transition-all duration-300 shrink-0 relative z-20">
                       <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <p className="text-zinc-400 text-[15px] leading-relaxed mb-8 flex-grow relative z-20">
                    {project.description}
                  </p>

                  <div className="mt-auto relative z-20">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-[11px] font-medium text-zinc-300 bg-black border border-white/10 rounded-lg uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-6 border-t border-white/5 text-xs text-zinc-500 font-medium">
                      <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse" />
                      {project.tags[0] || "TypeScript"}
                    </div>
                  </div>
                </CardSpotlight>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}