"use client";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { testimonials } from "@/data/testimonials";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  // Map the existing data structure to the format expected by AnimatedTestimonials
  const formattedTestimonials = testimonials.map((t) => ({
    quote: t.feedback,
    name: t.name,
    designation: `${t.role} — ${t.company}`,
    // Generating a high-resolution clean avatar since original used color+initials
    src: `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=${t.avatarColor.replace('#', '')}&color=fff&size=500&font-size=0.33`,
  }));

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-[#050505]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Kind Words
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-2xl">
            Feedback from clients and collaborators I&apos;ve had the pleasure of
            working with.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <AnimatedTestimonials testimonials={formattedTestimonials} autoplay={true} />
        </motion.div>
      </div>
    </section>
  );
}
