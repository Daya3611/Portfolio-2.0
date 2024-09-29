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
        <div>


            <Dialog >
                <DialogTrigger>
                    <Button className='flex gap-3 rounded-3xl px-8 py-6 text-md'>
                        Get in touch <ArrowUpRight className='w-5 h-5' />
                    </Button>
                </DialogTrigger>
                <DialogContent >
                    <DialogHeader className=''>
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
