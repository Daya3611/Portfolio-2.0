"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2000ms for a bit more animation time
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] backdrop-blur-md"
        >
          <div className="relative flex flex-col items-center gap-10">
            {/* Main Avatar Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
            >
              {/* Outer Pulse Rings */}
              <motion.div
                className="absolute inset-[-20px] rounded-full border border-cyan-500/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-[-40px] rounded-full border border-emerald-500/10"
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              
              {/* Spinning Gradient Border */}
              <motion.div
                className="absolute inset-[-4px] rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #10b981, #06b6d4, transparent 60%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Circle Background to mask the spinning gradient */}
              <div className="absolute inset-0 bg-[#050505] rounded-full" />

              {/* Avatar Image */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.3)] z-10">
                <Image 
                  src="/profile.png" 
                  alt="Profile Loading" 
                  fill 
                  className="object-cover" 
                  sizes="96px"
                  priority
                />
              </div>
            </motion.div>

            {/* Modern Loading Text & Dots */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-widest text-zinc-300 uppercase">
                  Loading
                </span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                      animate={{ opacity: [0.2, 1, 0.2], y: [0, -4, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Optional Progress bar effect */}
              <div className="w-32 h-[3px] bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
