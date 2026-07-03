"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Briefcase,
  ChevronDown,
  Terminal,
} from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

const roles = [
  "Full-Stack Developer",
  "AI Engineer",
  "SaaS Builder",
  "Open Source Contributor",
  "Problem Solver",
];

function useTypingEffect(items: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % items.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, items, speed, pause]);

  return displayed;
}

export default function Hero() {
  const typedRole = useTypingEffect(roles);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020202] pt-24 pb-16 w-full"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              {/* <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse" />
                Available for opportunities
              </motion.div> */}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl sm:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight"
              >
                Dayanand Gawade
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-0"
            >
              <span className="text-xl sm:text-2xl font-medium text-slate-300">
                {typedRole}
              </span>
              <span className="inline-block w-[1px] h-6 bg-slate-400 ml-1 animate-typing-cursor" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-zinc-400 text-lg leading-relaxed max-w-lg"
            >
              Building highly refined, production-grade web applications and intelligent AI systems. Focused on clean architecture, performance, and exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-colors text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white font-medium rounded-lg border border-white/10 transition-colors text-sm"
              >
                <Briefcase className="w-4 h-4" />
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-5 pt-4"
            >
              <a
                href="https://github.com/Daya3611"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/dayanandgawade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hi@dayanandgawade.in"
                aria-label="Send Email"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="/resume.pdf"
                download="Dayanand_Gawade_Resume.pdf"
                className="text-zinc-500 hover:text-white flex items-center gap-1.5 transition-colors text-sm"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image with Floating Objects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
          >
            {/* Background Glow/Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full transform scale-[1.05] border border-white/5 shadow-2xl shadow-white/5" />

            {/* Main Image Container */}
            <div className="absolute inset-0 bg-black rounded-full overflow-hidden border border-white/10 z-10">
              <Image
                src="/profile.jpeg"
                alt="Dayanand Gawade"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>

            {/* Floating Object 1 */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-16 h-16 lg:w-20 lg:h-20 bg-[#0B0B0B]/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center z-20 shadow-xl"
            >
              <Terminal className="w-6 h-6 lg:w-8 lg:h-8 text-slate-300" />
            </motion.div>

            {/* Floating Object 2 */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-12 h-12 lg:w-16 lg:h-16 bg-[#0B0B0B]/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center z-20 shadow-xl"
            >
              <Github className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-400" />
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-300 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
