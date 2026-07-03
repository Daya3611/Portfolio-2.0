"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { experiences } from "@/data/experience";
import { MapPin, ExternalLink } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const typeColors: Record<string, string> = {
  "Full-Time": "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Founder: "text-slate-400 bg-slate-500/10 border-slate-500/20",
  Freelancing: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  Internship: "text-purple-400 bg-purple-500/10 border-purple-500/20",
};

export default function Experience() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="experience" ref={ref} className="section-padding bg-[#050505]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2 tracking-tight">
            My Journey
          </h2>
          <p className="text-zinc-400 mt-4 text-md leading-relaxed max-w-2xl">
            From internships to building and shipping my own products a timeline
            of how I&apos;ve grown as a developer.
          </p>
        </motion.div>

        <div className="relative max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {experiences.map((exp, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/5 last:border-none py-2"
              >
                <AccordionTrigger className="px-4 py-6 hover:no-underline hover:bg-white/[0.02] data-[state=open]:bg-white/[0.02] transition-colors rounded-2xl group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-4 gap-4 text-left">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-slate-300 transition-colors">{exp.role}</h3>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-300 bg-slate-500/20 px-2 py-0.5 rounded-full border border-slate-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                            Present
                          </span>
                        )}
                      </div>
                      <div className="text-zinc-400 font-medium text-[15px] flex flex-wrap items-center gap-2">
                        {exp.company}
                        <span className="w-1 h-1 rounded-full bg-zinc-600 hidden sm:block" />
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 mt-2 sm:mt-0">
                      <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold text-slate-300 bg-white/5 border border-white/10">
                        {exp.type}
                      </span>
                      <span className="mono text-[13px] text-zinc-500">{exp.period}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-8 pt-2">
                  <div className="pl-0 sm:pl-6 sm:border-l-2 border-white/10 sm:ml-2 mt-4">
                    <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      {exp.responsibilities.map((r, ri) => (
                        <div key={ri} className="flex items-start gap-3">
                          <span className="text-slate-500 mt-1.5 shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          </span>
                          <p className="text-zinc-300 text-sm leading-relaxed">{r}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-[11px] font-medium text-zinc-300 bg-black border border-white/10 rounded-lg transition-colors hover:border-slate-500/50 hover:text-white uppercase tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
