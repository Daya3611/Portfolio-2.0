import { Github, icons } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socialsLinks = [
    {
        name: "Github",
        link: "https://github.com/Daya3611",
        icons: <Github/>
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/dayanand-gawade/",
        icons: <icons.Linkedin/>
    },
    {
        name: "Twitter",
        link: "https://twitter.com/_daya3611",
        icons: <icons.Twitter/>
    },
    {
        name: "Instagram",
        link: "https://instagram.com/_daya3611",
        icons: <icons.Instagram/>
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/dayanand.gawade.9",
        icons: <icons.Facebook/>
    },

]
const currentYear = new Date().getFullYear();

const Age = currentYear - 2005;

function PersnolInfo() {
  return (
    <section>
        <div>
            <div className='flex justify-center mt-10'>
                <Image src='/profile.png' width={200} height={200} className='rounded-full' alt='Dayanand Gawade'/>
            </div>
            <div>
                <h1 className='text-4xl font-medium text-center mt-5'>Dayanand Gawade</h1>
                <p className='text-muted-foreground text-center mt-2'>Frontend Developer</p>
            </div>
            <div className='flex justify-center mt-5  text-white gap-3'>
                {socialsLinks.map((items,index) => (
                    <Link href={items.link} key={index} className='flex gap-2 mt-5 cursor-pointer bg-gray-500 hover:bg-gray-300 p-3 rounded-full transition-all hover:text-black'>
                        <p alt={items.name}>{items.icons}</p>
                    </Link>

                ))}
            </div>
        </div>

        <div className='flex flex-col mt-10 items-center justify-center '>
                <div className='spacing-y-5'>
                <p className='text-md font-semibold text-gray-600 dark:text-gray-400'>Age: {Age}</p>
                <p className='text-md font-semibold text-gray-600 dark:text-gray-400'>Country: India</p>
                <p className='text-md font-semibold text-gray-600 dark:text-gray-400'>Address: Mumbai, Maharashtra</p>
                <p className='text-md font-semibold text-gray-600 dark:text-gray-400'>Email: hi@dayanandgawade.in</p>
                <p className='text-md font-semibold text-gray-600 dark:text-gray-400'>Phone: NA</p>
                </div>
        </div>
    </section>
  )
}

export default PersnolInfo

