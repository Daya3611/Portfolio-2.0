"use client";

import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import { motion, Variants } from "framer-motion";

export default function ProjectsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5
      }
    }
  };

  return (
    <motion.main
      className="flex flex-col min-h-screen px-4 text-white bg-black relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background gradient */}
      <motion.div
        className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="fixed top-4 left-0 right-0 z-50 md:px-[200px] px-4">
        <Navbar />
      </div>

      <motion.div
        className="mt-28 mb-10 relative z-10"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <motion.span
              className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2 block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >

            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-zinc-500"
              variants={titleVariants}
              style={{ perspective: "1000px" }}
            >
              My Projects
            </motion.h1>

            <motion.div
              className="h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-transparent max-w-md origin-left"
              variants={lineVariants}
            />
          </motion.div>

          <motion.p
            className="text-zinc-400 text-lg max-w-xl leading-relaxed"
            variants={itemVariants}
          >
            A collection of things I've built recently. Each project represents a unique challenge and creative solution.
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Projects />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-5 h-5 text-zinc-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}