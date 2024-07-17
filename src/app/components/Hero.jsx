"use client"
import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Contact from './Contact';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
  

  

function Hero() {
    const { toast } = useToast()
    const [state, setState] = useState();
    useEffect(() => {
        // Effect logic
      }, []);

      
      

  return (
    <div className="relative overflow-hidden mt-10">
    
    

    
    <div className="w-full max-w-3xl px-4 py-8 mx-auto mt-10">
        
        {/* <div className="bg-yellow-100 border border-yellow-300 text-yellow-700 rounded-lg p-4 mb-8">
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    
                    
                </div>
                <div className="ml-3">
                    <p className="font-semibold">Heads up!</p>
                    <p>You can add components and dependencies to your app using the CLI.</p>
                </div>
            </div>
        </div> */}

        
        <div className="space-y-6">
            <p className="text-base md:text-lg lg:text-xl text-gray-800 italic font-serif dark:text-gray-400">Hello! I am</p>
            <div className="max-w-2xl md:max-w-2xl sm:max-w-1xl">

            {/* animate-text-gradient sm:inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 italic */}
                <h1 className="animate-text-gradient bg-gradient-to-r from-neutral-800 via-slate-400 to-blue-700 bg-[200%_auto] bg-clip-text landing-tight text-transparent dark:from-blue-100 dark:via-blue-400 dark:to-blue-900 italic  text-center font-bold text-3xl md:text-5xl lg:text-6xl  sm:3xl md:4xl "><strong className=''>Dayanand Gawade .</strong></h1>
                <h2 className="text-md md:text-lg lg:text-2xl text-gray-600 text-end font-medium dark:text-gray-400">A Fullstack Web Developer</h2>
            </div>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-800 font-mono dark:text-gray-300">
                <Typewriter
            options={{
                strings: ["A full stack developer with a passion for creating modern and intuitive web applications.",],
                autoStart: true,
                loop: true,
            }}
            />
            
            </p>
            <div className='gap-2 p-2 grid grid-cols-2'>
            
            <Dialog>
                <Button className="bg-blue-600 hover:bg-blue-400 hover:text-white  dark:text-white  dark:hover:text-black" 
                >
                <DialogTrigger className='w-full'>Getin Touch</DialogTrigger>
                <DialogContent className="dark:bg-black">
                    <DialogHeader>
                    <DialogTitle>Get in touch</DialogTitle>
                    <DialogDescription>
                    Fill in the form to get in touch with me.
                         <Contact />
                         <div className='mt-5 '>
                         or 
                         <div className='items-center gap-3 text-left'>
                            <Link href="www.linkedin.com/in/dayanandgawade">
                            <Button className='mr-2 dark:bg-black border dark:hover:bg-blue-600 dark:border-gray-400 dark:text-white' >Linkedin</Button>
                            </Link>
                            <Link href="mailto:dayanandgawade@dayanandpvtltd.eu.org">
                            <Button className='mr-2 dark:bg-black border dark:hover:bg-blue-600 dark:border-gray-400 dark:text-white'>Email</Button>
                            </Link>
                            <Link href="https://www.instagram.com/dayanandgawade8/">
                            <Button className='mr-2 dark:bg-black border dark:hover:bg-blue-600 dark:border-gray-400 dark:text-white'><Instagram className='h-[15px] w-[15px]' /> Insta</Button>
                            </Link>
                         </div>
                            
                         </div>
                         
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
                </Button></Dialog>
                <Button className="bg-white border  border-blue-800 text-blue-700 hover:bg-blue-400 hover:text-white dark:bg-black dark:text-blue-600 dark:hover:bg-gray-300 dark:hover:text-black"
                onClick={() => {
                    toast({
                        title: "This Function is Not devloped yet.",
                      description: "please try after some time.",
                    })
                  }}
                  >Downlode Resume</Button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Hero

