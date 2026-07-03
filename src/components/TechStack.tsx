"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { techStack } from "@/data/techstack";
import { Badge } from "@/components/ui/badge";
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiPython, SiFastapi,
  SiPostgresql, SiMongodb, SiFirebase, SiRedis,
  SiDocker, SiGit, SiGithub, SiVercel, SiLinux,
  SiOpenai, SiTensorflow, SiPytorch, SiAppwrite, SiFigma,
  SiPrisma, SiRadixui,
} from "react-icons/si";

const iconComponents: Record<string, React.ElementType> = {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiPython, SiFastapi,
  SiPostgresql, SiMongodb, SiFirebase, SiRedis,
  SiDocker, SiGit, SiGithub, SiVercel, SiLinux,
  SiOpenai, SiTensorflow, SiPytorch, SiAppwrite, SiFigma,
  SiPrisma, SiRadixui,
};

const allCategories = ["All", ...Array.from(new Set(techStack.map((t) => t.category)))];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  const filtered =
    activeCategory === "All"
      ? techStack
      : techStack.filter((t) => t.category === activeCategory);

  return (
    <section id="techstack" ref={ref} className="py-24 bg-[#0B0B0B]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Tools of the Trade
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            The precise technologies I reach for to build scalable, high-performance software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {filtered.map((tech, i) => {
            const Icon = iconComponents[tech.icon];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.015, duration: 0.3 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2.5 text-sm font-medium border-white/10 bg-[#0A0A0A] text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2.5 shadow-sm"
                >
                  {Icon && <Icon className="w-4 h-4" style={{ color: tech.color }} />}
                  {tech.name}
                </Badge>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
