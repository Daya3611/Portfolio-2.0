"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: scrollDirection === "down" && scrolled ? -100 : 0,
          opacity: scrollDirection === "down" && scrolled ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none"
      >
        <nav
          className={`pointer-events-auto rounded-full p-2 flex items-center justify-between gap-4 lg:gap-8 transition-all duration-500 ${scrolled
              ? "backdrop-blur-xl bg-[#0A0A0A]/80 border border-white/10 shadow-2xl"
              : "backdrop-blur-md bg-black/20 border border-white/5"
            }`}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center group pl-2"
            aria-label="Go to home"
          >
            <div className="relative w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden">
              <Image src="/profile.jpeg" alt="Profile" fill className="object-cover" sizes="32px" />
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-colors ${isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden lg:flex pr-2">
            <a
              href="/resume.pdf"
              download="Dayanand_Gawade_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold bg-white hover:bg-slate-200 text-black rounded-full transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 mr-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#0B0B0B] border-l border-white/8 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                    <Image src="/profile.jpeg" alt="Profile" fill className="object-cover" sizes="32px" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Dayanand Gawade</p>
                    <p className="text-[11px] text-slate-400">Available for work</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/8 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleNavClick(link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                          ? "bg-slate-500/10 text-slate-400 border border-slate-500/20"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {link.label}
                      {isActive && <ArrowUpRight className="w-3.5 h-3.5" />}
                    </motion.button>
                  );
                })}
              </nav>

              <div className="pt-6 border-t border-white/8">
                <a
                  href="/resume.pdf"
                  download="Dayanand_Gawade_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold bg-white hover:bg-slate-200 text-black rounded-full transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}