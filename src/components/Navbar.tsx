import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <nav className='p-8 '>
            <div className='bg-white/8 backdrop-blur-md p-3 rounded-4xl fixed top-8 left-0 right-0 mx-8 flex justify-between items-center text-center border border-white/20'>
                <div className='flex gap-3 pl-2  items-center text-center text-white '>
                    <Image src="/profile.png" alt="logo" width={40} height={40} className='rounded-3xl' />
                    <div className='text-left'>
                        <h1 className='text-md text-center -pl-5 '>Dayanand Gawade</h1>
                        <p className='text-sm font-sans'>Available for work</p>
                    </div>
                    <div>
                        <div className='w-3 h-3 bg-green-500 rounded-full mb-5 -ml-2 border-2 border-black animate-pulse'></div>
                    </div>
                </div>
                <div className=''>
                    <Button className='bg-white text-black rounded-3xl hover:bg-white/80'>Contact Me</Button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
