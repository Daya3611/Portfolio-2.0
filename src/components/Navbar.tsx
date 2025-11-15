import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { HoverBorderGradient } from './ui/hover-border-gradient'

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

    <div className="flex justify-end flex-grow">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-slate-800 font-medium
                  hover:bg-white/80 transition"
      >
        Contact Me
      </HoverBorderGradient>
    </div>
  </div>
</nav>


    )
}

export default Navbar
