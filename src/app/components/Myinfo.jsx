import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button'
import { ArrowUpRight, Instagram, Mail, MailPlus } from 'lucide-react'
import Link from 'next/link'

function Myinfo() {
    return (
        <div >


            <Dialog className="" >
                <DialogTrigger>
                    <Button className='btn flex gap-3 rounded-3xl px-4 py-3 text-sm md:px-8 md:py-6 md:text-md bg-black text-white dark:bg-white dark:text-black border-white dark:border-black border-[2px] hover:bg-white hover:text-black hover:border-transparent'>
                        Get in touch <ArrowUpRight className='w-5 h-5' />
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-300 text-black dark:bg-black dark:text-white">
                    <DialogHeader className='bg-gray-300 text-black dark:bg-black dark:text-white'>
                        <DialogTitle className='flex gap-3 items-center'>Get in touch <Mail className='w-5 h-5' /></DialogTitle>
                        <DialogDescription >
                            <p className='text-justify mt-2 mb-2'>Contact me with email or instagram and I'll get back to you as soon as possible.</p>

                            <div className='flex gap-3 mt-4'>
                                <Link href='mailto:hi@dayanandgawade.in'>
                                    <Button className='flex gap-2 rounded-3xl'><MailPlus className='w-5 h-5' /> hi@dayanandgawade.in</Button>
                                </Link>

                                <Link href='https://instagram.com/_daya3611'>
                                    <Button className='flex gap-2 rounded-3xl'><Instagram className='w-5 h-5' /> _daya3611</Button>
                                </Link>
                                

                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Myinfo
