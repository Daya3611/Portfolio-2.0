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
    <div className='flex items-center   h-20 '>
      <div className='flex items-center'>
        <div className='mr-4'>
          <Avatar className="border border-blue-600 boder-size-5">
            <AvatarImage src="/profile.png" />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
        </div>
        <div className=' grid grid-cols-1  text-left items-center'>
          {/* <h1 className='sm:text-2xl md:text-2xl text-black  lg:text-3xl font-bold animate-text-gradient bg-gradient-to-r from-neutral-900 via-slate-700 to-gray-600 dark:from-neutral-100 dark:via-slate-400 dark:to-blue-600  bg-clip-text landing-tight text-transparent '>Dayanand <span className='text-blue-600'>.</span></h1>  */}
          <h2 className='font-bold'>Dayanand Gawade</h2>
          <h2 className='text-sm flex gap-1 items-center'>
          <div className='flex h-2 w-2 bg-green-600 rounded-full items-center text-center '>
            <span className='h-2 w-2 bg-green-600 rounded-full animate-ping'></span>
          </div>
           Avilable for work!</h2>
          
          
        </div>
      </div>
      <div className='ml-auto'>
        <ModeToggle />        
      </div>
    </div>
  );
}

export default Header;
