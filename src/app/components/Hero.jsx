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
import { DownloadIcon, Instagram, InstagramIcon, Linkedin, Mail } from 'lucide-react';
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
    <section className='py-10 mt-3 px-8 md:px-24 lg:px-[95px] max-w-3xl'>
      <div className='mt-4'>
        <p className='text-md'>Hi I am  <strong className='italic'>Dayanand Gawade</strong></p>

        <h1 className='font-medium text-[60px] sm:text-[80px] md:text-[90px] lg:text-[150px] leading-none md:-ml-2.5'>Fullstack <SparklesText text='Developer' className='font-medium text-[60px] sm:text-[80px] md:text-[90px] lg:text-[150px] leading-none ' /></h1>

        <p className='mt-3 text-sm md:text-base  text-muted-foreground'>Specialized in Web Design, UX / UI, Backend Development, and Front End Development.</p>

        <p className='text-base mt-3 mb-2 md:text-lg'>
          I'm helping startups and business owners to make a visual statement through spotless Web Design and Development so they can increase brand awareness and sell more.
        </p>

        <p className='mt-4'>
          <Myinfo />
        </p>

      </div>
    </section>

  )
}

export default Hero

