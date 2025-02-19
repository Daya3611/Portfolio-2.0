"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Section() {
  return (
    <section className="px-8 md:px-24 lg:px-[95px] mt-5">
      <h1 className="text-2xl">I can help you with ....</h1>

      <div
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        viewport={{ once: false, amount: 0.5 }}
        className="box grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 mt-4 gap-5"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box"
        >
          <div className="lod box flex flex-col gap-1 hover:bg-[#cecece] dark:hover:bg-[#252525] md:ml-2 md:px-2 py-3 md:py-0 md:mt-0 mt-3 md:border-b-0 border-b dark:bg-neutral-900 bg-neutral-100  rounded-3xl items-center text-center w-full transition-all duration-300 ">
            <div className="mb-7">
              <h2 className="mt-7 text-xl">Design</h2>
              <p className="text-muted-foreground text-sm px-5">
                I make web designs that engage your audience and create the user
                experience you want.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box"
        >
          <div className="lod box flex flex-col gap-1 hover:bg-[#cecece] dark:hover:bg-[#252525] md:ml-2 md:px-2 py-3 md:py-0 md:mt-0 mt-3 md:border-b-0 border-b dark:bg-neutral-900 bg-neutral-100  rounded-3xl items-center text-center w-full transition-all duration-300  ">
            <div className="mb-7">
              <h2 className="mt-7 text-xl">Development</h2>
              <p className="text-muted-foreground text-sm px-5">
                Bringing visuals to life through developing highly functional
                web solutions.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box"
        >
          <div className="lod box flex flex-col gap-1 hover:bg-[#cecece] dark:hover:bg-[#252525] md:ml-2 md:px-2 py-3 md:py-0 md:mt-0 mt-3 md:border-b-0 border-b dark:bg-neutral-900 bg-neutral-100  rounded-3xl items-center text-center w-full transition-all duration-300 ">
            <div className="mb-7">
              <h2 className="mt-7 text-xl">The Full Package</h2>
              <p className="text-muted-foreground px-5 text-sm">
                Get the best of both worlds for your website, capture your brand
                identity and get fully functional features.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const skillimg = [
  {
    name:"d",
    img:"dd"
  }
]

export function Skills() {
  return (
    <div>
      {/* dsd
      <div>sdffdfj</div> */}
    </div>
  );
}
