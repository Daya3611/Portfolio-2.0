import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipText } from "./FlipText";
import { EncryptedText } from "../ui/encrypted-text";

export function HeroAnimated() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
      <h2 className="-m-9 text-xl">Hey, there <span className="animate-accordion-do">👋</span> I'm</h2>
      <h2 className=" bg-clip-text text-transparent text-center
    bg-gradient-to-b from-white to-neutral-500
    text-6xl sm:text-4xl md:text-6xl lg:text-7xl
    font-sans font-bold tracking-tight
    py-4 sm:py-6 md:py-10
    relative z-20">
        Dayanand <br className="md:hidden " /> Gawade, <br /> <FlipText />
      </h2>

      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-100 text-center">
        <EncryptedText
          text="Building scalable digital products and bringing ideas to life with modern web technologies."
          encryptedClassName="mx-auto max-w-lg py-10 text-left text-neutral-500 text-center"
          revealedClassName="mx-auto max-w-lg py-10 text-left text-neutral-100 text-center"
          revealDelayMs={50}
        />
      </p>
    </BackgroundLines>
  );
}
