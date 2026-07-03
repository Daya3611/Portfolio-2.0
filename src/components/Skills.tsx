"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { skills } from "@/data/skills";
import type { Skill } from "@/types";

type Category = Skill["category"];

const categories: { key: Category; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "ai", label: "AI / ML" },
  { key: "databases", label: "Databases" },
  { key: "devops", label: "DevOps" },
  { key: "tools", label: "Tools" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#0B0B0B] border border-white/8 rounded-2xl p-5 card-hover group"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
          <span className="text-[11px] text-zinc-500 mono">{skill.years}</span>
        </div>
        <span className="text-xs font-bold text-slate-400 mono">
          {skill.level}%
        </span>
      </div>
      <p className="text-zinc-500 text-xs leading-relaxed mb-4 line-clamp-2">
        {skill.description}
      </p>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #10b981, #06b6d4)",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("frontend");
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  const filtered = skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-[#0B0B0B]"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2 tracking-tight">
            What I Work With
          </h2>
          <p className="text-zinc-400 mt-4 text-lg max-w-2xl">
            A curated toolkit of technologies I use daily to design, build, and
            ship high-quality software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Skill categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-slate-500 text-black shadow-lg shadow-slate-500/20"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/8"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            role="tabpanel"
          >
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
