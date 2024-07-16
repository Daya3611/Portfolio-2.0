import { Button } from '@/components/ui/button';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


function Header() {
  return (
    <div className='flex items-center   h-20 p-10'>
      <div className='flex items-center'>
        <div className='mr-4'>
          <Avatar>
            <AvatarImage src="/profile.png" />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex  text-center items-center'>
          <h1 className='text-black  text-3xl font-bold animate-text-gradient bg-gradient-to-r from-neutral-900 via-slate-700 to-blue-600  bg-clip-text landing-tight text-transparent'>Dayanand <span className='text-blue-600'>.</span></h1> 
          {/* <span className='text-3xl text-green-500'>. </span><span className=''>Available To Work</span>  */}
        </div>
      </div>
      <div className='ml-auto'>
        <Button className='bg-blue-700'>Follow</Button>
      </div>
    </div>
  );
}

export default Header;
