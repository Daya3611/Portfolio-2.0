"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  src: string;
  year: string;
  category: string;
  link: string;
  content: () => React.ReactNode;
};

const projects: Project[] = [
  {
    title: "Toolbox Platform",
    description: "All-in-one developer tools dashboard",
    src: "/toolbox.png",
    year: "2026",
    category: "Web App",
    link: "https://toolbox.dayanandgawade.in",
    content: () => (
      <p>
        Toolbox is a modern web platform providing essential utilities for
        developers including image tools, converters, validators and AI
        helpers.  
        <br />
        <br />
        Built using Next.js, Tailwind CSS and serverless APIs with optimized UX
        for both desktop and mobile devices.
      </p>
    ),
  },
  {
    title: "Skybox UI",
    description: "Landing page UI kit",
    src: "/skybox.png",
    year: "2025",
    category: "UI/UX",
    link: "https://skybox.dayanandgawade.in",
    content: () => (
      <p>
        A premium landing page design system focused on SaaS startups.
        Includes modern animations, gradients and responsive layouts.
      </p>
    ),
  },
  {
    title: "MiniURL",
    description: "URL shortener service",
    src: "/miniurl.png",
    year: "2024",
    category: "Web Service",
    link: "https://miniurl.dayanandgawade.in",
    content: () => (
      <p>
        MiniURL is a fast and lightweight URL shortener with analytics,
        QR generation and custom slugs.
      </p>
    ),
  },
  {
    title: "Portfolio Website",
    description: "Personal brand website",
    src: "/profile.png",
    year: "2025",
    category: "Branding",
    link: "https://dayanandgawade.in",
    content: () => (
      <p>
        Personal portfolio built with Next.js App Router, motion animations and
        performance-first design principles.
      </p>
    ),
  },
];

export default function Projects() {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const [active, setActive] = useState<Project | null>(null);

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <>
      {/* overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}
      </AnimatePresence>

      {/* modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-50 px-4">
            <motion.div
              ref={ref}
              layoutId={`card-${active.title}-${id}`}
              className="w-full max-w-xl bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <motion.img
                layoutId={`image-${active.title}-${id}`}
                src={active.src}
                alt={active.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-lg font-semibold"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`desc-${active.title}-${id}`}
                      className="text-sm text-neutral-500"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <a
                    href={active.link}
                    target="_blank"
                    className="px-4 py-2 rounded-full text-sm bg-green-500 text-white font-medium"
                  >
                    Visit
                  </a>
                </div>

                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {active.content()}
                </div>

                <div className="flex gap-2 text-xs pt-2">
                  <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    {active.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    {active.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* cards list */}
      <ul className="max-w-3xl mx-auto px-4 space-y-4">
        {projects.map((project) => (
          <motion.li
            key={project.title}
            layoutId={`card-${project.title}-${id}`}
            onClick={() => setActive(project)}
            className="flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <motion.img
              layoutId={`image-${project.title}-${id}`}
              src={project.src}
              className="h-16 w-16 rounded-lg object-cover"
            />

            <div className="flex-1">
              <motion.h3
                layoutId={`title-${project.title}-${id}`}
                className="font-medium"
              >
                {project.title}
              </motion.h3>
              <motion.p
                layoutId={`desc-${project.title}-${id}`}
                className="text-sm text-neutral-500"
              >
                {project.description}
              </motion.p>
            </div>

            <span className="text-xs text-neutral-400">
              {project.year}
            </span>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
