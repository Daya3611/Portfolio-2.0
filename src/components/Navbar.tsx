"use client";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "./ui/button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  // Animation variants
  const navbarVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonHoverVariants: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.95 }
  };

  const contactButtonVariants: Variants = {
    rest: {
      scale: 1,
      boxShadow: "0 0 0 rgba(255,255,255,0)"
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(255,255,255,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.98 }
  };

  const dialogContentVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: {
        duration: 0.2
      }
    }
  };

  const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const staggerItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.nav
      className=""
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <motion.div
        className="
          w-full
          bg-gradient-to-r from-white/10 via-white/5 to-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-lg shadow-black/30
          rounded-3xl px-3 py-2
          flex flex-wrap gap-3
          items-center justify-between
        "
        variants={itemVariants}
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          borderColor: "rgba(255, 255, 255, 0.3)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          className="flex items-center gap-3 min-w-[200px] flex-1 text-white"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/profile.png"
              alt="logo"
              width={38}
              height={38}
              className="rounded-3xl"
            />
          </motion.div>

          <div className="flex flex-col">
            <motion.div
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <motion.h1
                className="text-sm font-semibold"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Dayanand Gawade
              </motion.h1>
              <motion.span
                className="w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black"
                variants={pulseVariants}
                animate="animate"
              />
            </motion.div>
            <motion.p
              className="text-xs text-white/80"
              variants={itemVariants}
              whileHover={{ opacity: 1 }}
            >
              Available for work
            </motion.p>
          </div>
        </motion.div>

        <div className="md:flex justify-end flex-grow hidden">
          <motion.div
            variants={contactButtonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-slate-800 font-medium
                hover:bg-white/15 transition"
            >
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.span
                      className="cursor-pointer inline-block"
                      whileHover={{ scale: 1.02 }}
                    >
                      Contact Me
                    </motion.span>
                  </DialogTrigger>
                  <AnimatePresence>
                    <DialogContent className="bg-neutral-900 border-neutral-800">
                      <motion.div
                        variants={dialogContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                            Contact Me
                          </DialogTitle>
                          <DialogDescription className="text-neutral-400">
                            Don't hesitate to reach out if you have something
                            interesting or just want to say hi!

                            <motion.div
                              className="mt-6"
                              variants={staggerContainerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <motion.p
                                className="text-[12px] text-neutral-200 pb-2 font-medium tracking-wide uppercase"
                                variants={staggerItemVariants}
                              >
                                Recommended
                              </motion.p>
                              <motion.div
                                className="pt-2 grid grid-cols-3 gap-3"
                                variants={staggerContainerVariants}
                              >
                                {[
                                  { name: "WhatsApp", url: "https://miniurl.dayanandgawade.in/WhatsApp" },
                                  { name: "Discord", url: "https://miniurl.dayanandgawade.in/Discord" },
                                  { name: "Email", url: "mailto:hi@dayanandgawade.in" }
                                ].map((item, index) => (
                                  <motion.div
                                    key={item.name}
                                    variants={staggerItemVariants}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Button
                                      className="w-full bg-white text-black hover:bg-neutral-200 font-medium"
                                      onClick={() => {
                                        window.location.href = item.url;
                                      }}
                                    >
                                      {item.name}
                                    </Button>
                                  </motion.div>
                                ))}
                              </motion.div>

                              <motion.p
                                className="text-[12px] text-neutral-200 mt-6 pb-2 font-medium tracking-wide uppercase"
                                variants={staggerItemVariants}
                              >
                                Other
                              </motion.p>
                              <motion.div
                                className="pt-2 grid grid-cols-1 gap-3"
                                variants={staggerContainerVariants}
                              >
                                {[
                                  { name: "Instagram", url: "https://miniurl.dayanandgawade.in/Instagram" },
                                  { name: "Github", url: "https://miniurl.dayanandgawade.in/Github" },
                                  { name: "LinkedIn", url: "https://miniurl.dayanandgawade.in/linkdin" }
                                ].map((item, index) => (
                                  <motion.div
                                    key={item.name}
                                    variants={staggerItemVariants}
                                    whileHover={{ scale: 1.02, x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <Button
                                      className="w-full bg-neutral-950 text-white border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
                                      onClick={() => {
                                        window.location.href = item.url;
                                      }}
                                    >
                                      <span className="flex items-center gap-2">
                                        {item.name === "LinkedIn" ? "LinkedIn" : item.name}
                                      </span>
                                    </Button>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </motion.div>
                          </DialogDescription>
                        </DialogHeader>
                      </motion.div>
                    </DialogContent>
                  </AnimatePresence>
                </Dialog>
              </div>
            </HoverBorderGradient>
          </motion.div>
        </div>

        <div className="flex justify-end flex-grow md:hidden">
          <motion.div
            variants={contactButtonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-slate-800 font-medium
                hover:bg-white/15 transition"
            >
              <div>
                <Drawer>
                  <DrawerTrigger asChild>
                    <motion.span
                      className="cursor-pointer inline-block"
                      whileHover={{ scale: 1.02 }}
                    >
                      Contact Me
                    </motion.span>
                  </DrawerTrigger>
                  <DrawerContent className="bg-neutral-950 border-neutral-800">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <DrawerHeader>
                        <DrawerTitle className="text-left text-2xl font-bold text-white">
                          Contact Me
                        </DrawerTitle>
                        <DrawerDescription className="text-left text-neutral-400">
                          <p className="text-left">
                            Don't hesitate to reach out if you have something
                            interesting or just want to say hi!
                          </p>
                          <motion.div
                            className="mt-6"
                            variants={staggerContainerVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <motion.p
                              className="text-[12px] text-left text-neutral-200 pb-2 font-medium tracking-wide uppercase"
                              variants={staggerItemVariants}
                            >
                              Recommended
                            </motion.p>
                            <motion.div
                              className="pt-2 grid grid-cols-3 gap-3"
                              variants={staggerContainerVariants}
                            >
                              {[
                                { name: "WhatsApp", url: "https://miniurl.dayanandgawade.in/WhatsApp" },
                                { name: "Discord", url: "https://miniurl.dayanandgawade.in/Discord" },
                                { name: "Email", url: "mailto:hi@dayanandgawade.in" }
                              ].map((item) => (
                                <motion.div
                                  key={item.name}
                                  variants={staggerItemVariants}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Button
                                    className="w-full bg-white text-black hover:bg-neutral-200 font-medium"
                                    onClick={() => {
                                      window.location.href = item.url;
                                    }}
                                  >
                                    {item.name}
                                  </Button>
                                </motion.div>
                              ))}
                            </motion.div>

                            <motion.p
                              className="text-[12px] text-left text-neutral-200 mt-6 pb-2 font-medium tracking-wide uppercase"
                              variants={staggerItemVariants}
                            >
                              Other
                            </motion.p>
                            <motion.div
                              className="pt-2 grid grid-cols-1 gap-3"
                              variants={staggerContainerVariants}
                            >
                              {[
                                { name: "Instagram", url: "https://miniurl.dayanandgawade.in/Instagram" },
                                { name: "Github", url: "https://miniurl.dayanandgawade.in/Github" },
                                { name: "LinkedIn", url: "https://miniurl.dayanandgawade.in/linkdin" }
                              ].map((item) => (
                                <motion.div
                                  key={item.name}
                                  variants={staggerItemVariants}
                                  whileHover={{ scale: 1.02, x: 4 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Button
                                    className="w-full bg-neutral-950 text-white border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
                                    onClick={() => {
                                      window.location.href = item.url;
                                    }}
                                  >
                                    {item.name === "linkdin" ? "LinkedIn" : item.name}
                                  </Button>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        </DrawerDescription>
                      </DrawerHeader>
                    </motion.div>
                  </DrawerContent>
                </Drawer>
              </div>
            </HoverBorderGradient>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;