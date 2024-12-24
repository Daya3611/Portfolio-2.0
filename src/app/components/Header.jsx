"use client"
import { Button } from '@/components/ui/button';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SunDimIcon } from 'lucide-react';
import { ModeToggle } from '@/components/ui/ModeToggel';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Themeswitcher from '@/components/ui/theme-swicher';

export const animatedBorderClass = "before:content-[''] hover:before:left-auto hover:before:right-0 hover:before:left-auto hover:before:duration-300 before:h-[1.5px] before:bg-primary before:w-0 hover:before:w-full before:transition-all before:absolute relative before:left-0 before:-bottom-0.5"

function Header() {
  const page = usePathname();
  return (
    <header className='flex justify-between mt-5 py-3 px-8 md:px-24 lg:px-[95px] items-center' >

      <div className='flex gap-4 text-sm'>
        {page != "/" && (
          <Link href='/'>
            <p className={animatedBorderClass}>Home</p>
          </Link>
        )}
        <Link href='/about'>
          <p className={animatedBorderClass}>About</p>
        </Link>

        <Link href='/#projects'>
          <p className={animatedBorderClass}>Projects</p>
        </Link>

        <Link href='/experience'>
          <p className={animatedBorderClass}>Experience</p>
        </Link>

        <Link href='/resume'>
          <p className={animatedBorderClass}>Resume</p>
        </Link>
      </div>

      <div className='ml-auto'>
        <Themeswitcher />
      </div>
    </header >
  );
}

export default Header;
