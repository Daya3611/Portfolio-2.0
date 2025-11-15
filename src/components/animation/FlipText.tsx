"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function FlipText() {
    return (
        <div>
            <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
                <LayoutTextFlip
                    text=" "
                    words={[
                        "Full Stack Web Developer",
                        "UI/UX Designer",
                        "GDG Mumbai Member",
                        "OCRID Researcher",
                        "Tech Enthusiast",
                        "Open Source Contributor",
                        "Founder of Rich Royal Farm",
                    ]}
                />
            </motion.div>
            {/* <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        Experience the power of modern UI components that bring your ideas to
        life.
      </p> */}
        </div>
    );
}
