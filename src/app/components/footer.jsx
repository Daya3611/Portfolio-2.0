
"use client"
import React from 'react'
import Myinfo from './Myinfo'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { animatedBorderClass } from './Header';

export default function Footer() {
    const page = usePathname();
    return (
        <footer className="px-6 md:px-20 lg:px-24">
            {page == "/" && (
                <div className="grid gap-5 md:flex md:items-end md:justify-between mt-3">
                    <h1 className="text-4xl md:text-6xl max-w-3xl relative">
                        <div className="absolute left-0 -top-1.5 md:-top-0">
                            <div className="relative w-12 h-12 md:w-14 md:h-14">
                                <div className="h-2.5 w-2.5 rounded-full absolute right-0.5 top-0.5 bg-green-300"></div>
                                <img src="./profile.png" className="h-12 md:h-14 w-12 md:min-w-14 rounded-full" />
                            </div>
                        </div>
                        <span className="ml-14 md:ml-[70px]">
                            Let’s talk about a project, collaboration or an idea you may have
                        </span>
                    </h1>
                    <Myinfo />
                </div>
            )}
            <div className="py-10 border-t mt-10">
                <div className="flex gap-3 items-center">
                    <Link href="https://github.com/Daya3611" className={"text-sm " + animatedBorderClass}>Github</Link>
                    <Link href="https://www.instagram.com/_daya3611/" className={"text-sm " + animatedBorderClass}>Instagram</Link>
                    <Link href="mailto:hi@dayanandgawade.in" className={"text-sm " + animatedBorderClass}>Email</Link>
                    <Link href="https://www.linkedin.com/in/dayanandgawade" className={"text-sm " + animatedBorderClass}>Linkedin</Link>
                </div>
                <p className="text-sm mt-3">© {new Date().getFullYear()} All right reserved. Coded with ❤️ by <Link href="https://github.com/Daya3611" className={animatedBorderClass}>Daya3611</Link></p>
            </div>
        </footer>
    )
}


