"use client";

import { projects } from "@/data/projects";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, use } from "react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ProjectPage({ params }: Props) {
  const { slug } = use(params);
  const project = projects.find((item) => item.slug === slug);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  if (!project) notFound();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonVariants: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -10px rgba(255,255,255,0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.95 }
  };

  const arrowVariants: Variants = {
    rest: { x: 0, y: 0 },
    hover: {
      x: 3,
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  const navVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      <motion.nav
        className="border-b border-zinc-800 sticky top-0 z-50 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <motion.div variants={navVariants} initial="hidden" animate="visible">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
              >
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: -4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </motion.svg>
                <span className="relative">
                  Back to projects
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <motion.main
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.header
          className="mb-12"
          style={{ y: headerY }}
        >
          <motion.div
            className="flex items-center gap-3 mb-6 text-sm"
            variants={itemVariants}
          >
            <motion.span
              className="text-zinc-400 px-3 py-1 border border-zinc-800 rounded-full"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255,255,255,0.2)",
                color: "#fff"
              }}
            >
              {project.category}
            </motion.span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 font-mono">{project.year}</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            variants={titleVariants}
          >
            {project.title.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.02,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="relative aspect-video w-full overflow-hidden bg-zinc-900 rounded-2xl"
            variants={imageVariants}
          >
            <motion.div
              className="absolute inset-0"
              style={{ scale: imageScale, opacity: imageOpacity }}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Overlay gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
            />

            {/* Loading shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.header>

        <motion.article
          className="mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="text-zinc-300 leading-relaxed text-lg space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {project.content}
          </motion.div>
        </motion.article>

        <motion.div
          variants={itemVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div variants={buttonVariants}>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold hover:bg-zinc-200 transition-colors rounded-xl group relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center gap-2">
                Visit Live Project
                <motion.span variants={arrowVariants}>
                  <SquareArrowOutUpRightIcon className="h-5 w-5" />
                </motion.span>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="fixed top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="fixed bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </motion.main>
    </div>
  );
}