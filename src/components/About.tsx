"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Building, Heart, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { education } from "@/data/education";

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Maharashtra, India" },
  { icon: GraduationCap, label: "Degree", value: "MSc DS&Ai" },
  { icon: Briefcase, label: "Current Role", value: "Frontend Dev" },
  { icon: Building, label: "Open To", value: "Remote & Hybrid Roles" },
  { icon: Zap, label: "Availability", value: "Immediately Available" },
  { icon: Heart, label: "Passion", value: "Building Products People Love" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export default function About() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="section-padding bg-[#050505]">
      <div className="container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2 tracking-tight">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          <div className="space-y-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="space-y-6"
            >
              <p className="text-zinc-400 text-[15px] leading-relaxed">
                I&apos;m a <span className="text-white font-semibold underline decoration-slate-500/70 decoration-2 underline-offset-4">Full-Stack Developer</span> based in Maharashtra, India, passionate about building <span className="text-white font-medium">modern, scalable web applications</span> that solve real-world problems. I enjoy transforming ideas into reliable, production-ready products using technologies like <span className="text-white font-semibold underline decoration-slate-500/70 decoration-2 underline-offset-4">React, Next.js, Node.js, and modern cloud platforms</span>.
              </p>
              <p className="text-zinc-400 text-[15px] leading-relaxed">
                Over the past few years, I&apos;ve gained hands-on experience by developing full-stack applications, contributing to professional projects, and continuously exploring new technologies. I&apos;ve built projects ranging from cloud storage platforms and developer productivity tools to <span className="text-white font-semibold underline decoration-slate-500/70 decoration-2 underline-offset-4">AI-powered applications</span>, giving me experience across the <span className="text-white font-medium">entire development lifecycle</span>, from planning and UI design to backend architecture, deployment, and optimization.
              </p>
              <p className="text-zinc-400 text-[15px] leading-relaxed">
                I&apos;m particularly interested in <span className="text-white font-semibold underline decoration-slate-500/70 decoration-2 underline-offset-4">combining web development with AI</span> to create smarter, more intuitive user experiences. Whether it&apos;s integrating AI capabilities, designing clean user interfaces, or building scalable backend systems, I focus on writing maintainable code and delivering products that are <span className="text-white font-medium">fast, secure, and user-friendly</span>.
              </p>
              <p className="text-zinc-400 text-[15px] leading-relaxed">
                I believe great software comes from <span className="text-white font-semibold underline decoration-slate-500/70 decoration-2 underline-offset-4">thoughtful problem-solving, clean architecture, and continuous learning</span>. My goal is to build technology that makes a meaningful impact while constantly improving my skills as a developer.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-slate-400" />
                Education
              </h3>
              <div className="relative space-y-0">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-white/8" />
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={0.25 + i * 0.1}
                    className="relative pl-10 pb-8 last:pb-0"
                  >
                    <div
                      className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center ${item.current
                        ? "bg-slate-500 border-slate-500"
                        : "bg-[#0B0B0B] border-white/20"
                        }`}
                    >
                      {item.current && (
                        <span className="w-2 h-2 rounded-full bg-black" />
                      )}
                    </div>
                    <div className="bg-[#0B0B0B] border border-white/8 rounded-xl p-5 hover:border-white/15 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="text-white font-semibold text-base leading-snug">
                          {item.degree}
                        </h4>
                        <span className="mono text-xs text-slate-400 bg-slate-500/10 px-2.5 py-1 rounded-full border border-slate-500/20 whitespace-nowrap shrink-0">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm font-medium mb-2">
                        {item.institution}
                      </p>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-8 lg:w-80">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              className="bg-[#0B0B0B] border border-white/8 rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-5">
                Quick Facts
              </h3>
              <div className="space-y-4">
                {quickFacts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <fact.icon className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-500 font-medium uppercase tracking-wider">
                        {fact.label}
                      </p>
                      <p className="text-sm text-zinc-200 font-medium mt-0.5">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
