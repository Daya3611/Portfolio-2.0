"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { certifications } from "@/data/certifications";
import {
  BookOpen,
  Brain,
  Code2,
  Database,
  Box,
  Cloud,
  ExternalLink,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Brain,
  Code2,
  Database,
  Box,
  Cloud,
};

export default function Certifications() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="certifications" ref={ref} className="section-padding bg-[#0B0B0B]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2 tracking-tight">
            Credentials
          </h2>
          <p className="text-zinc-400 mt-4 text-lg max-w-2xl">
            Formal learning that complements hands-on experience and keeps my
            knowledge current.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || BookOpen;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#101010] border border-white/8 rounded-2xl p-6 card-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center group-hover:bg-slate-500/15 transition-colors">
                      {/* <Icon className="w-6 h-6 text-slate-400" /> */}
                    </div>
                    <span className="mono text-xs text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/8">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-base leading-snug mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4">{cert.organization}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium text-zinc-300 bg-white/5 border border-white/8 px-2 py-0.5 rounded-md mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-slate-400 bg-slate-500/10 hover:bg-slate-500/20 border border-slate-500/20 hover:border-slate-500/40 rounded-xl transition-all duration-200"
                  >
                    View Credential
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
