"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Github, Mail } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="pt-8 pb-12 border-t border-border">
      {/* Contact CTA Card */}
      <Card className="bg-card border-border p-6 sm:p-8 mb-12 shadow-none rounded-2xl">
        <CardHeader className="p-0 mb-3">
          <CardTitle className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
            Let&apos;s build something useful.
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg mt-1">
            I&apos;m always interested in software engineering roles, open-source projects, and technical collaborations. Drop me a note if you&apos;d like to connect.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 pt-3 flex flex-wrap items-center gap-3">
          <Button
            asChild
            variant="default"
            size="sm"
            className="font-medium text-xs rounded-full px-5"
          >
            <a href="mailto:hi@dayanandgawade.in">
              <Mail className="h-3.5 w-3.5 mr-1.5" />
              Email Me
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="font-medium text-xs text-muted-foreground hover:text-foreground rounded-full px-5"
          >
            <a href="https://github.com/Daya3611" target="_blank" rel="noopener noreferrer">
              <Github className="h-3.5 w-3.5 mr-1.5" />
              GitHub
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Minimal Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
        <p>© 2026 Dayanand Gawade. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Daya3611"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/dayanandgawade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="mailto:hi@dayanandgawade.in"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
