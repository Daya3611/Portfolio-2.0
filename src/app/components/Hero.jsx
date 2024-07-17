"use client"
import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

function Hero() {

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
            <p className="text-base md:text-lg lg:text-xl text-gray-800 italic font-serif">Hello! I am</p>
            <div className="max-w-2xl md:max-w-2xl sm:max-w-1xl">

            {/* animate-text-gradient sm:inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 italic */}
                <h1 className="animate-text-gradient bg-gradient-to-r from-neutral-900 via-slate-500 to-blue-700 bg-[200%_auto] bg-clip-text landing-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 italic  text-center font-bold text-3xl md:text-5xl lg:text-6xl  sm:3xl md:4xl "><strong className=''>Dayanand Gawade .</strong></h1>
                <h2 className="text-md md:text-lg lg:text-2xl text-gray-600 text-end font-medium">A Fullstack Web Developer</h2>
            </div>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-800 font-mono">
                <a href=""><Typewriter
            options={{
                strings: ["A full stack developer with a passion for creating modern and intuitive web applications.",],
                autoStart: true,
                loop: true,
            }}
            /></a>
            
            </p>
            <div className='gap-2 p-2 grid grid-cols-2'>
                <Button className="bg-blue-600 hover:bg-blue-400 hover:text-white ">Getin Touch</Button>
                <Button className="bg-white border  border-blue-800 text-blue-700 hover:bg-blue-400 hover:text-white">Downlode Resume</Button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Hero
