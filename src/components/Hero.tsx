"use client";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { HeroAnimated } from "./animation/HeroAnimate";
import BottumNav from "./animation/BottumNav";


export default function Hero  ()  {
    return (
        <section className="h-screen flex flex-col justify-center items-center px-4">
            <HeroAnimated />
            <BottumNav/>
        </section>
    );
};


