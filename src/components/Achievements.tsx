"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { achievements } from "@/data/achievements";
import {
  Rocket,
  Calendar,
  Code2,
  Users,
  Trophy,
  Star,
} from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const iconMap: Record<string, React.ElementType<any>> = {
  Rocket,
  Calendar,
  Code2,
  Users,
  Trophy,
  Star,
};

function CountUp({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, started]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section id="achievements" ref={ref} className="section-padding bg-[#050505]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2 tracking-tight">
            By the Numbers
          </h2>
          <p className="text-zinc-400 mt-4 text-lg max-w-xl mx-auto">
            Milestones that reflect the work, dedication, and growth over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Star;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <CardSpotlight className="h-full bg-[#0A0A0A] border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-col justify-between items-start text-left hover:border-slate-500/20 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-12 group-hover:bg-slate-500/10 group-hover:scale-110 transition-all duration-300 relative z-20">
                    <Icon className="w-5 h-5 text-slate-300" />
                  </div>
                  <div className="relative z-20">
                    <h3 className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-3">
                      <CountUp
                        target={item.value}
                        suffix={item.suffix}
                        started={inView}
                      />
                    </h3>
                    <p className="text-[15px] font-semibold text-slate-200 mb-1">{item.label}</p>
                    <p className="text-xs text-zinc-500 max-w-[200px] leading-relaxed">{item.description}</p>
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
