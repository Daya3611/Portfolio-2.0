"use client";

import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const arrowVariants: Variants = {
    rest: {
      x: 0,
      y: 0,
      rotate: 0
    },
    hover: {
      x: 3,
      y: -3,
      rotate: 45,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants: Variants = {
    rest: {
      scale: 1,
      boxShadow: "0 0 0 rgba(59, 130, 246, 0)"
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.15)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const gradientVariants: Variants = {
    rest: {
      opacity: 0,
      x: "-100%"
    },
    hover: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tagVariants: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderColor: "rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-4 w-full" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-zinc-800/60 bg-zinc-950 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0"
                  variants={gradientVariants}
                />

                <div className="flex flex-col z-10 relative">
                  <motion.h3
                    className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="mt-2 text-zinc-400 text-sm leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="mt-6 flex items-center gap-3">
                    <motion.span
                      className="text-xs font-medium px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full"
                      variants={tagVariants}
                    >
                      {project.category}
                    </motion.span>
                    <motion.span
                      className="text-xs text-zinc-500 font-mono"
                      whileHover={{ color: "#6b7280" }}
                    >
                      {project.year}
                    </motion.span>
                  </div>
                </div>

                <motion.div
                  className="mt-6 md:mt-0 p-3 bg-zinc-900 border border-zinc-800 rounded-full group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white text-zinc-300 transition-all duration-300 z-10 shrink-0 relative overflow-hidden"
                  variants={arrowVariants}
                >
                  <motion.div
                    className="absolute inset-0 bg-blue-600"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ borderRadius: "50%" }}
                  />
                  <ArrowUpRight className="w-5 h-5 relative z-10" />
                </motion.div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
                    transform: "translateX(-100%)",
                  }}
                  whileHover={{
                    transform: "translateX(100%)",
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}