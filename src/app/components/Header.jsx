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


function Header() {
  return (
    <div className='flex items-center   h-20 p-10'>
      <div className='flex items-center'>
        <div className='mr-4'>
          <Avatar className="border border-blue-600 boder-size-5">
            <AvatarImage src="/profile.png" />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex  text-center items-center'>
          <h1 className='sm:text-2xl md:text-2xl text-black  lg:text-3xl font-bold animate-text-gradient bg-gradient-to-r from-neutral-900 via-slate-700 to-blue-600 dark:from-neutral-100 dark:via-slate-400 dark:to-blue-600  bg-clip-text landing-tight text-transparent '>Dayanand <span className='text-blue-600'>.</span></h1> 
          
        </div>
      </div>
      <div className='ml-auto'>
        <ModeToggle />        
      </div>
    </div>
  );
}

export default Header;
