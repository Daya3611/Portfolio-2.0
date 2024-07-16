"use client"
import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';

function Hero() {

    const [state, setState] = useState();
    useEffect(() => {
        // Effect logic
      }, []);

  return (
    <div className="relative overflow-hidden mt-10">
    
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

    
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
            <div className="max-w-2xl">

            {/* animate-text-gradient sm:inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 italic */}
                <h1 className="animate-text-gradient bg-gradient-to-r from-neutral-900 via-slate-500 to-blue-500 bg-[200%_auto] bg-clip-text landing-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 italic  text-center text-4xl md:text-5xl lg:text-6xl font-bold"><strong>Dayanand Gawade</strong></h1>
                <h2 className="text-xl md:text-2xl lg:text-2xl text-gray-600 text-end font-semibold">A Fullstack Web Developer</h2>
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
        </div>
    </div>
</div>

  )
}

export default Hero
