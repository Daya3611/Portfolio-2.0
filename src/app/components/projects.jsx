"use client";
import {
  ArrowBigLeftDashIcon,
  ArrowUpRightFromCircle,
  ArrowUpRightFromSquareIcon,
  LibraryIcon,
  Link2Icon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const project = [
  {
    title: "URL Shortener",
    description:
      "A simple app to shorten URLs, built with Next.js and Node.js. It offers customizable links and user engagement analytics.",
    link: "https://miniurl.dayanandgawade.in",
    img: '/projects/miniurl.png'
  },
  {
    title: "Tailwind CSS Bg Gradient",
    description: "A plugin for Tailwind CSS to create background gradients.",
    link: "https://tailwind-bg-tawny.vercel.app/",
    img: '/projects/tailwind.png'
  },
  {
    title: "MusicHub",
    description:
      "A responsive music app built with React and Node.js. Features include playlist management and a recommendation system.",
    link: "https://musichub.dayanandgawade.in",
    img: '/projects/musichub.png'
  },
  // {
  //   title: "YouTube Clone",
  //   description: "A clone of YouTube using the YouTube Data API v3.",
  //   link: "https://yt.dayanandgawade.in",
  // },
  {
    title: "Cloud Storage WebApp",
    description: "An app to upload and access files from anywhere.",
    link: "https://skybox.dayanandgawade.in/",
    img: '/projects/skybox.png'
  },
];

export default function Projects() {
  return (
    <section className="px-8 md:px-24 lg:px-24 mt-28 -mb-6" id="projects">
      <h1 className="text-4xl font medium">
        Selected Work
        <span className="text-base text-muted-foreground ml-2 ">
          ({project.length})
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-4 gap-3">
        {project.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.5 }}
            key={index}
            className="box "
          >
            <Link
              href={item.link}
              className="lod-projects py-5 px-5  flex flex-col h-full dark:bg-neutral-900 bg-neutral-100 hover:bg-[#cecece] dark:hover:bg-[#252525] transition-all rounded-3xl "
              target="_blank"
            >
              <div className="flex gap-4 items-center">
                <div className="max-w-[100px] flex items-center justify-center -py-5 -px-5">
                  <Image src={item.img} width={150} height={150} alt="txt" className="object-fit  rounded-2xl" />
                </div>

                <div className="flex flex-col">
                  <p className="flex gap-2">
                    <h1 className="text-xl ">{item.title}</h1>{" "}
                    {/* <ArrowUpRightFromSquareIcon className="h-5 w-5 text-gray-500" />{"a "} */}
                  </p>
                  <p className="text-muted-foreground text-[12px] mt-1 mb-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

   
    </section>
  );
}
