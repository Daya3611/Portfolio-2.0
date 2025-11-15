"use client";
import Image from "next/image";
import React from "react";
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
import {
  ArrowRightToLineIcon,
  Link2,
  Link2OffIcon,
  MessageCircle,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-2 sm:px-6">
      <div
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
      >
        <div className="flex items-center gap-3 min-w-[200px] flex-1 text-white">
          <Image
            src="/profile.png"
            alt="logo"
            width={38}
            height={38}
            className="rounded-3xl"
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-semibold">Dayanand Gawade</h1>
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black animate-pulse" />
            </div>
            <p className="text-xs text-white/80">Available for work</p>
          </div>
        </div>

        <div className="md:flex justify-end flex-grow hidden">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-slate-800 font-medium
                  hover:bg-white/15 transition"
          >
            <div>
              <Dialog>
                <DialogTrigger>Contact Me - pc</DialogTrigger>
                <DialogContent className="bg-neutral-900">
                  <DialogHeader>
                    <DialogTitle>Contact Me</DialogTitle>
                    <DialogDescription>
                      Don't hesitate to reach out if you have something
                      interesting or just want to say hi!
                      <div className="mt-3">
                        <p className="text-[12px] text-neutral-200 pb-1">
                          Recommended
                        </p>
                        <div className="pt-1 grid grid-cols-3 gap-2">
                          <Button
                            className="w-full"
                            onClick={(e) => {
                              window.location.href =
                                "https://miniurl.dayanandgawade.in/WhatsApp";
                            }}
                          >
                            WhatsApp
                          </Button>
                          <Button
                            className="w-full"
                            onClick={(e) => {
                              window.location.href =
                                "https://miniurl.dayanandgawade.in/Discord";
                            }}
                          >
                            Discord
                          </Button>
                          <Button
                            className="w-full"
                            onClick={(e) => {
                              window.location.href =
                                "mailto:hi@dayanandgawade.in";
                            }}
                          >
                            Email
                          </Button>
                        </div>
                        <p className="text-[12px] text-neutral-200 mt-3 pb-1">
                          Other
                        </p>
                        <div className="pt-1 grid grid-cols-1 gap-2 ">
                          <Button
                            className="w-full bg-black text-white border border-neutral-700 hover:bg-neutral-700"
                            onClick={(e) => {
                              window.location.href =
                                "https://miniurl.dayanandgawade.in/Instagram";
                            }}
                          >
                            Instagram
                          </Button>
                          <Button
                            className="w-full bg-black text-white border border-neutral-700 hover:bg-neutral-700"
                            onClick={(e) => {
                              window.location.href =
                                "https://miniurl.dayanandgawade.in/Github";
                            }}
                          >
                            Github
                          </Button>
                          <Button
                            className="w-full bg-black text-white border border-neutral-700 hover:bg-neutral-700"
                            onClick={(e) => {
                              window.location.href =
                                "https://miniurl.dayanandgawade.in/linkdin";
                            }}
                          >
                            Linkdin
                          </Button>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </HoverBorderGradient>
        </div>

        <div className="flex justify-end flex-grow md:hidden">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-slate-800 font-medium
                  hover:bg-white/15 transition"
          >
            <div>
              <Drawer>
                <DrawerTrigger>Contact Me</DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="text-left">Contact Me</DrawerTitle>
                    <DrawerDescription>
                      <p className="text-left">Don't hesitate to reach out if you have something
                      interesting or just want to say hi!</p>
                      <div className="mt-3">
                        <p className="text-[12px] text-left text-neutral-200 pb-1 ">
                          Recommended
                        </p>
                        <div className="pt-1 grid grid-cols-3 gap-2">
                          <Button
                            className="w-full"
                            onClick={(e) => {
                              window.location.href =
                                "https://miniurl.dayanandgawade.in/WhatsApp";
                            }}
                          >
                            WhatsApp
                          </Button>
                          <Button
                            className="w-full"
                            onClick={(e) => {
                              window.location.href =
                                "https://miniurl.dayanandgawade.in/Discord";
                            }}
                          >
                            Discord
                          </Button>
                          <Button
                            className="w-full"
                            onClick={(e) => {
                              window.location.href =
                                "mailto:hi@dayanandgawade.in";
                            }}
                          >
                            Email
                          </Button>
                        </div>
                        <p className="text-[12px] text-left text-neutral-200 mt-3 pb-1">
                          Other
                        </p>
                        <div className="pt-1 grid grid-cols-1 gap-2 ">
                          <Button
                            className="w-full bg-black text-white border border-neutral-700 hover:bg-neutral-700"
                            onClick={(e) => {
                              window.location.href =
                                "https://miniurl.dayanandgawade.in/Instagram";
                            }}
                          >
                            Instagram
                          </Button>
                          <Button
                            className="w-full bg-black text-white border border-neutral-700 hover:bg-neutral-700"
                            onClick={(e) => {
                              window.location.href =
                                "https://miniurl.dayanandgawade.in/Github";
                            }}
                          >
                            Github
                          </Button>
                          <Button
                            className="w-full bg-black text-white border border-neutral-700 hover:bg-neutral-700"
                            onClick={(e) => {
                              window.location.href =
                                "https://miniurl.dayanandgawade.in/linkdin";
                            }}
                          >
                            Linkdin
                          </Button>
                        </div>
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>
                  {/* <DrawerFooter>
                                        <Button>Submit</Button>
                                        <DrawerClose>
                                            <Button variant="outline">Cancel</Button>
                                        </DrawerClose>
                                    </DrawerFooter> */}
                </DrawerContent>
              </Drawer>
            </div>
          </HoverBorderGradient>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
