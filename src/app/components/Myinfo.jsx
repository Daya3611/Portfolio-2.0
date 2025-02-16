import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Instagram, Mail, MailPlus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
function Myinfo() {
  return (
    <div className="">
      <Dialog className="">
        <DialogTrigger>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="box"
          >
            <Button className="btn flex gap-3 rounded-3xl px-4 py-3 text-sm md:px-7 md:py-4 md:text-sm bg-black hover:bg-[#373737] text-white dark:bg-white dark:text-black hover:text-[#878787] hover:border-transparent dark:hover:bg-[#dfdfdf]">
              Get in touch
              {/* <ArrowUpRight className='w-5 h-5' /> */}
            </Button>
          </motion.div>
        </DialogTrigger>
        <div className="px-5">
          <DialogContent className="bg-gray-300 text-black dark:bg-black dark:text-white lg:rounded-3xl md:rounded-2xl sm:rounded-xl rounded-xl border-[#373737]">
            <DialogHeader className="">
              <DialogTitle className="flex gap-3 items-center">
                Get in touch <Mail className="w-5 h-5" />
              </DialogTitle>
              <DialogDescription>
                <p className="text-justify mt-2 mb-2">
                  Contact me with email or instagram and I'll get back to you as
                  soon as possible.
                </p>

                <div className="flex gap-3 mt-4">
                  <Link href="mailto:hi@dayanandgawade.in">
                    <Button className="flex gap-1 rounded-3xl">
                      <MailPlus className="w-5 h-5" /> hi@dayanandgawade.in
                    </Button>
                  </Link>

                  <Link href="https://instagram.com/_daya3611">
                    <Button className="flex gap-2 rounded-3xl">
                      <Instagram className="w-5 h-5" /> _daya3611
                    </Button>
                  </Link>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

export default Myinfo;
