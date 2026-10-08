"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Github, Linkedin, Mail, FileText, Check, Copy, Twitter, GithubIcon } from "lucide-react";

export default function HeaderIntro() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hi@dayanandgawade.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TooltipProvider>
      <section className="pt-12 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 border-border rounded-full">
              <AvatarImage src="/profile.jpeg" alt="Dayanand Gawade" className="rounded-full" />
              <AvatarFallback className="rounded-full">DG</AvatarFallback>
            </Avatar>

            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Dayanand Gawade
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                Software Engineer / Full Stack Developer
              </p>
            </div>
          </div>

          {/* Social Links with Tooltips */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground bg-neutral-900"
                >
                  <a
                    href="https://github.com/Daya3611"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="rounded-full">GitHub</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground bg-neutral-900"
                >
                  <a
                    href="https://linkedin.com/in/dayanandgawade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="rounded-full">LinkedIn</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground bg-neutral-900"
                >
                  <a
                    href="https://x.com/dayanandgawade"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X Profile"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="rounded-full">Twitter / X</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground bg-neutral-900"
                >
                  <a href="mailto:hi@dayanandgawade.in" aria-label="Email Me">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="rounded-full">Email</TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Short Introduction */}
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
          I&apos;m a software engineer focused on building practical software, AI-powered applications, and scalable web products. Specialized in React, Next.js, TypeScript, Node.js, and integrating LLMs into production-grade systems.
        </p>

        {/* Action Buttons using rounded-full */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="default"
            size="sm"
            className="font-medium text-xs rounded-full px-4"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-3.5 w-3.5 mr-1.5" />
              View Resume
            </a>
          </Button>

          <Button
            onClick={copyEmail}
            variant="outline"
            size="sm"
            className="font-medium text-xs text-muted-foreground hover:text-foreground rounded-full px-4"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 mr-1.5 text-emerald-400" />
                Copied to Clipboard
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 mr-1.5" />
                Copy Email
              </>
            )}
          </Button>
        </div>
      </section>
    </TooltipProvider>
  );
}
