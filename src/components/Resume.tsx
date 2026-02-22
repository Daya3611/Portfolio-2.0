"use client";

import { Card, CardContent } from "@/components/ui/card";
import { IconDownload } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Resume() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonVariants = {
    rest: {
      scale: 1,
      boxShadow: "0 0 0 rgba(255,255,255,0)"
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -10px rgba(255,255,255,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.95 }
  };

  const iconVariants = {
    rest: { y: 0 },
    hover: {
      y: [0, -3, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full"
    >
      <motion.div variants={cardVariants}>
        <Card className="w-full bg-neutral-900 border-neutral-800 text-white rounded-2xl overflow-hidden border border-neutral-800/50 shadow-2xl shadow-black/50 flex flex-col relative group">

          {/* Shimmer effect on load */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none z-20"
            variants={shimmerVariants}
            animate="animate"
          />

          {/* ================= VIEWER ================= */}
          <CardContent className="p-0 bg-neutral-900 flex-1 relative">

            {/* MOBILE IMAGE VIEW */}
            <motion.div
              className="block md:hidden w-full h-[65vh] overflow-y-auto px-4 py-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              variants={contentVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/resume.jpg"
                alt="Resume preview"
                className="w-full h-auto bg-white rounded-xl shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>

            {/* DESKTOP PDF VIEW */}
            <motion.div
              className="hidden md:block w-full h-[73vh] relative"
              variants={contentVariants}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-neutral-800/20 to-transparent rounded-t-xl pointer-events-none z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-full rounded-t-xl"
                title="Resume PDF Viewer"
              />
            </motion.div>

          </CardContent>

          {/* ================= DOWNLOAD BAR ================= */}
          <motion.div
            className="w-full border-t border-neutral-800 bg-neutral-900/50 backdrop-blur-sm flex justify-center py-4 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* Animated background gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <motion.a
              href="/resume.pdf"
              download
              className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600 text-sm font-medium transition-colors duration-300 z-10"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span variants={iconVariants}>
                <IconDownload size={18} className="text-blue-400" />
              </motion.span>
              <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Download PDF
              </span>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

        </Card>
      </motion.div>

      {/* Decorative ambient glow */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}