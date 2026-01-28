"use client";

import Link from "next/link";
import { BsFillFolderFill } from "react-icons/bs";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        

        <div className="grid grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="flex flex-col items-center text-center group"
            >
              <BsFillFolderFill className="w-[110px] h-[110px] text-yellow-400 group-hover:text-white transition" />
              <p className="mt-2 text-sm font-medium text-white group-hover:text-zinc-400 transition">
                {project.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}