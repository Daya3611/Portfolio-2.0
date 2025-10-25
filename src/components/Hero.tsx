"use client";
import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Terminal } from "lucide-react";
import { Badge } from "./ui/badge";


const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center px-4">
            <Badge variant="default" className="bg-slate-700 border border-red-400 mb-6 p-2">
                Under development (fixing hosting issues)
            </Badge>


            <div className="max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                    Hey! I am{" "}
                    <span className="bg-blue-900 px-3 pb-1 rounded-3xl">
                        Dayanand Gawade
                    </span>
                    , a self taught Full Stack Developer!
                </h2>
            </div>
            <div className="flex gap-2 mt-6">
                <Button className="bg-white text-black rounded-3xl hover:bg-white/80" onClick={() => window.location.href = 'https://github.com/Daya3611'}>
                    Github <Github />
                </Button>
                <Button className="bg-black text-white border border-amber-50 rounded-3xl hover:bg-neutral-800 hover:border-neutral-700" onClick={() => window.location.href = 'http://www.linkedin.com/in/dayanandgawade'}>
                    LinkedIn <Linkedin className="text-blue-500" />
                </Button>
            </div>
        </section>
    );
};

export default Hero;
