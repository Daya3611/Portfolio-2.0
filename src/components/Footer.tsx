"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Daya3611", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/dayanandgawade", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hi@dayanandgawade.in", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/8">
      <div className="container-custom py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#101010] border border-white/10 flex items-center justify-center">
                <span className="text-sm font-bold gradient-text mono">DG</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Dayanand Gawade</p>
                <p className="text-xs text-zinc-500">Full-Stack & AI Developer</p>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Building production-grade web applications and AI systems with a focus on performance and developer experience.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">Contact</p>
            <div className="space-y-2.5">
              <a href="mailto:hi@dayanandgawade.in" className="block text-sm text-zinc-500 hover:text-white transition-colors">
                hi@dayanandgawade.in
              </a>
              <p className="text-sm text-zinc-500">Maharashtra, India</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                <span className="text-xs text-slate-400 font-medium">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/8">
          <p className="text-zinc-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Dayanand Gawade. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs mono">
            Built with Next.js · TypeScript · Tailwind · Framer Motion
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center text-slate-400 hover:bg-slate-500/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
