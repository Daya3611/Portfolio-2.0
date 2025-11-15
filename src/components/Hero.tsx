"use client";
import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Terminal } from "lucide-react";
import { Badge } from "./ui/badge";
import { HeroAnimated } from "./animation/HeroAnimate";


export default function Hero  ()  {
    return (
        <section className="h-screen flex gle justify-center items-center px-4">
            <HeroAnimated />
        </section>
    );
};


