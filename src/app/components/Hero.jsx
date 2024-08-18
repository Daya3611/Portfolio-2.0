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


import Contact from './Contact';
import { DownloadIcon, Instagram, InstagramIcon, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
  

  

function Hero() {
    const { toast } = useToast()
    const [state, setState] = useState();
    useEffect(() => {
        // Effect logic
      }, []);

      
      

  return (
    <div className="relative overflow-hidden mt-10">
    
    

    
    <div className="w-full  px-1 py-8 mx-auto mt-10">
        
        

        
        <div className="space-y-6">
            <div className=''>
            
            <div className="w-full text-start items-start">

            
                <h1 className="animate-text-gradient bg-gradient-to-r from-neutral-800 via-slate-400 to-blue-700 bg-[200%_auto] bg-clip-text landing-tight text-transparent dark:from-blue-100 dark:via-blue-400 dark:to-blue-900   text-start font-bold text-3xl md:text-4xl lg:text-6xl  sm:xl  ">
                 <div className='font-sans text-[18px]  sm:text-[30px] lg:text-[30px] text-black  dark:text-gray-200'>Hello! I am</div>
                 <strong className='italic text-[30px] md:text-[50px] lg:text-[60px]'>Dayanand Gawade . <br /></strong>
                 <span className='text-[18px]  sm:text-[30px] lg:text-[30px] font-sans text-black dark:text-gray-200'>A Fullstack Web Developer form India</span></h1>

                
            </div>
            <p className="mt-4 text-base text-[11.5px] lg:text-[15px] text-gray-600  dark:text-gray-300 italic justify-evenly">
                A full stack developer with a passion for creating modern and intuitive web applications.
            
            </p>
            <div className='flex gap-3 py-6'>
            
            {/* <Dialog className='p-5 mr-2'>
                <Button className="bg-black dark:bg-blue-600 hover:bg-gray-400 hover:text-white  dark:text-white  dark:hover:text-black " 
                >
                <DialogTrigger className='w-full'>Getin Touch</DialogTrigger>
                <DialogContent className="dark:bg-[#131313] p-5 rounded-3xl m-auto border-transparent ">
                    <DialogHeader>
                    <DialogTitle>Get in touch</DialogTitle>
                    <DialogDescription>
                    Fill in the form to get in touch with me.
                        <div className='text-left'>
                        <Contact className="rounded-2xl" />
                        </div>
                         
                         <div className='mt-5 text-left flex gap-5'>
                         or 
                         <div className='items-center gap-3 text-left flex'>
                            <Link href="www.linkedin.com/in/dayanandgawade">
                            <Linkedin className=' bg-transparent   text-gray-500  hover:text-blue-600' />
                            </Link>
                            <Link href="mailto:dayanandgawade@dayanandpvtltd.eu.org">
                            <Mail className='bg-transparent   text-gray-500  hover:text-green-600' />
                            </Link>
                            <Link href="https://www.instagram.com/dayanandgawade8/">
                            <InstagramIcon  className=' bg-transparent   text-gray-500  hover:text-orange-600'/>
                            </Link>
                         </div>
                            
                         </div>
                         
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
                </Button></Dialog> */}
                <Drawer className="p-5 mr-2 items-center">
                <DrawerTrigger className='bg-black text-white dark:bg-blue-600 hover:bg-gray-400 hover:text-white  dark:text-white  dark:hover:text-black rounded-lg p-2 '>Getin Touch</DrawerTrigger>
                <DrawerContent className="px-3">
                  <DrawerHeader>
                    <DrawerTitle>Getin Touch</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.
                      <Contact  />
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    {/* <Button>Submit</Button> */}
                    {/* <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose> */}
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>


                <Button className="bg-transperent  dark:border-blue-500 text-gray-700 hover:bg-gray-400 hover:text-white dark:bg-transparent dark:text-blue-500 dark:hover:bg-blue-300 dark:hover:text-black flex gap-2"
                onClick={() => {
                    toast({
                        title: "This Function is Not devloped yet.",
                      description: "please try after some time.",
                    })
                  }}
                  > <DownloadIcon /> Downlode Resume</Button>
            </div>
            </div>
        </div>

        
    </div>
</div>

  )
}

export default Hero

