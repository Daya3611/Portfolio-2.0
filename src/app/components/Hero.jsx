"use client";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { motion } from "framer-motion";
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

import Contact from "../olds/Contact";
import {
  DownloadIcon,
  Github,
  Instagram,
  InstagramIcon,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Myinfo from "./Myinfo";
import SparklesText from "@/components/ui/sparkles-text";

function Hero() {
  const { toast } = useToast();
  const [state, setState] = useState();
  useEffect(() => {
    setTimeout(function () {
      document.getElementById("delayedDiv").style.display = "block";
    }, 1000); // 3000 ms = 3 seconds
  }, []);

  return (
    <section className="py-5 mt-3 px-8 md:px-24 lg:px-[95px] max-w-4xl md:flex">
      <div className="">
        <p className="text-md md:text-xl ">
          Hi I am <strong className="italic">Dayanand Gawade</strong>
        </p>

        <h1 className="font-medium text-[60px] sm:text-[80px] md:text-[90px] lg:text-[100px] leading-none md:-ml-2.5 bg-gradient-to-r from-neutral-400 via-neutral-800 to-black dark:to-neutral-700 bg-clip-text text-transparent">
          Fullstack{" "}
          <span className="font-bold text-[60px] sm:text-[80px] md:text-[90px] lg:text-[110px] ">
            Developer
          </span>{" "}
          {/* <SparklesText
            text="Developer"
            className="font-medium text-[60px] sm:text-[80px] md:text-[90px] lg:text-[110px] leading-none hidden lg:block "
          /> */}
        </h1>

        <p className="mt-3 text-sm md:text-sm text-muted-foreground">
          Specialized in Web Design, UX / UI, Backend Development, and Front End
          Development.
        </p>

        <p className="text-base mt-3 mb-2 sm:text-sm md:text-md">
          I'm helping startups and business owners to make a visual statement
          through spotless Web Design and Development so they can increase brand
          awareness and sell more.
        </p>

        <div className="flex gap-3 items-center mt-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="box"
          >
            <Link href="https://github.com/sponsors/Daya3611?o=esb">
              <Button className="btn flex gap-3 rounded-3xl px-4 py-2 text-sm md:px-7 md:py-4 md:text-sm bg-white text-black  dark:text-white border-[#c6c6c6] bg-transparent hover:bg-[#a8a8a8] dark:border-[#2a2a2a] border-[1px] hover:text-white hover:border-transparent dark:hover:bg-[#2a2a2a]">
                Sponsor Me
              </Button>
            </Link>
          </motion.div>
          <motion.div
            id="delayedDiv"
            className="hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,  // Duration of the fade-in
              delay: 1,      // Delay before starting the fade-in (1 second)
              ease: 'easeInOut'  // Smooth easing effect
            }}
          >
            <Myinfo />
          </motion.div>
        </div>
      </div>

      <div></div>
    </section>
  );
}

export default Hero;
