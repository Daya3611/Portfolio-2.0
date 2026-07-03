"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { services } from "@/data/services";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import {
  Layers,
  Brain,
  Zap,
  Cloud,
  Code2,
  MessageSquare,
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Brain,
  Zap,
  Cloud,
  Code2,
  MessageSquare,
};

export default function Services() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section id="services" ref={ref} className="py-24 bg-[#050505]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            What I Offer
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-2xl">
            From first-line code to production deployment — I cover the full
            spectrum of modern software development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-full"
              >
                <CardSpotlight 
                  className="h-full bg-[#0A0A0A] border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300"
                  color="rgba(148, 163, 184, 0.15)"
                  radius={400}
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-slate-300" />
                    </div>

                    <h3 className="text-white font-bold text-lg mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <ul className="space-y-3 pt-6 border-t border-white/5 mt-auto">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="w-4 h-4 rounded-full bg-slate-500/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-slate-300" />
                          </span>
                          <span className="text-zinc-400 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
