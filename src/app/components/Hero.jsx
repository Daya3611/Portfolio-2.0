"use client"
import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import Contact from '../olds/Contact';
import { DownloadIcon, Github, Instagram, InstagramIcon, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Myinfo from './Myinfo';
import SparklesText from '@/components/ui/sparkles-text';




function Hero() {
  const { toast } = useToast()
  const [state, setState] = useState();
  useEffect(() => {
    // Effect logic
  }, []);




  return (
    <section className='py-10 mt-3 px-8 md:px-24 lg:px-[95px] max-w-4xl md:flex'>
      <div className=''>
        <p className='text-md md:text-lg ml-1'>Hi I am  <strong className='italic'>Dayanand Gawade</strong></p>

        <h1 className='font-medium text-[60px] sm:text-[80px] md:text-[90px] lg:text-[150px] leading-none md:-ml-2.5'>Fullstack <span className='lg:hidden block'>Developer</span> <SparklesText text='Developer' className='font-medium text-[60px] sm:text-[80px] md:text-[90px] lg:text-[150px] leading-none hidden lg:block ' /></h1>

        <p className='mt-3 text-sm md:text-base  text-muted-foreground'>Specialized in Web Design, UX / UI, Backend Development, and Front End Development.</p>

        <p className='text-base mt-3 mb-2 md:text-lg'>
          I'm helping startups and business owners to make a visual statement through spotless Web Design and Development so they can increase brand awareness and sell more.
        </p>

        <div className='flex gap-3 items-center mt-4'>
          <span>
          <Myinfo />
          </span>
          <span>
          <Link href='https://github.com/sponsors/Daya3611?o=esb'>
            <Button className='btn flex gap-3 rounded-3xl px-4 py-3 text-sm md:px-8 md:py-6 md:text-md bg-white text-black dark:bg-black dark:text-white border-black dark:border-white border-[2px] hover:bg-black hover:text-white hover:border-transparent'>
              Sponsor On  <Github/>
            </Button>
          </Link>
          </span>
          {/* <iframe src="https://github.com/sponsors/Daya3611/button" title="Sponsor Daya3611" height="32" width="114" ></iframe> */}
        </div>
      
      </div>

      <div>
        
      </div>
    </section>
  )
}

export default Hero

