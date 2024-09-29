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

export const animatedBorderClass = "before:content-[''] hover:before:left-auto hover:before:right-0 hover:before:left-auto hover:before:duration-300 before:h-[1.5px] before:bg-primary before:w-0 hover:before:w-full before:transition-all before:absolute relative before:left-0 before:-bottom-0.5"

function Header() {
  const page = usePathname();
  return (
    <header className='flex justify-between mt-5 py-3 px-[95px]' >

      <div className='flex gap-4 text-sm'>
        {page != "/" && (
          <Link href='/'>
            <p className={animatedBorderClass}>Home</p>
          </Link>
        )}
        <Link href='/about'>
          <p className={animatedBorderClass}>About</p>
        </Link>

        <Link href='/projects'>
          <p className={animatedBorderClass}>Projects</p>
        </Link>

        <Link href='/experience'>
          <p className={animatedBorderClass}>Experience</p>
        </Link>
      </div>

      <div className='ml-auto'>
        <ModeToggle />
      </div>
    </header >
  );
}

export default Header;
