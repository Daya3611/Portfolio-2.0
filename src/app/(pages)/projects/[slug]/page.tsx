import { projects } from "@/data/projects";
import { SquareArrowDownRightIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-black">
      <nav className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to projects</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6 text-sm">
            <span className="text-zinc-400">{project.category}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            {project.title}
          </h1>

          <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <article className="mb-12">
          <div className="text-zinc-300 leading-relaxed">
            {project.content}
          </div>
        </article>

        <div>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium hover:bg-zinc-200 transition-colors rounded-xl"
          >
            Visit Live Project
            <SquareArrowOutUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}