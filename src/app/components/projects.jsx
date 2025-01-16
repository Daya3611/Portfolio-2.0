import { ArrowBigLeftDashIcon, ArrowUpRightFromCircle, ArrowUpRightFromSquareIcon, LibraryIcon, Link2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


export const project = [
    {
        title: 'URL Shortener',
        description: 'A simple app to shorten URLs, built with Next.js and Node.js. It offers customizable links and user engagement analytics.',
        link: 'https://miniurl.dayanandgawade.in',
    },
    {
        title: 'Tailwind CSS Bg Gradient',
        description: 'A plugin for Tailwind CSS to create background gradients.',
        link: 'https://tailwind-bg-tawny.vercel.app/',
    },
    {
        title: 'MusicHub',
        description: 'A responsive music app built with React and Node.js. Features include playlist management and a recommendation system.',
        link: 'https://musichub.dayanandgawade.in'
    },
    {
        title: 'YouTube Clone',
        description: 'A clone of YouTube using the YouTube Data API v3.',
        link: 'https://yt.dayanandgawade.in'
    },
    {
        title: 'Cloud Storage WebApp',
        description: 'An app to upload and access files from anywhere.',
        link: 'https://skybox.dayanandgawade.in/'
    },
]

export default function Projects() {

    return (
        <section className='px-8 md:px-24 lg:px-24 mt-28 -mb-6' id='projects'>
            <h1 className='text-4xl font medium'>Selected Work 
                <span className='text-base text-muted-foreground ml-2 '>
                    ({project.length})
                </span>
            </h1>
            {project.map((item, index) => (
                <div key={index} className='mt-10'>

                    <Link href={item.link} className='py-5 -mt-3 -mb-8 border-b grid hover:text-gray-400 dark:hover:text-gray-500 transition-all'>
                        <p className='flex gap-2'><h1 className='text-xl '>{item.title}</h1> <ArrowUpRightFromSquareIcon className='h-5 w-5 text-gray-500'/> </p>
                        <p className='text-muted-foreground text-sm mt-1'>{item.description}</p>

                    </Link>

                </div>
            ))}

            {/* <div className='grid grid-cols-3 bg-gray-600 gap-3  items-center text-center '>
                <div className='rounded-2xl bg-black'>sdsd</div>
                <div>sdsd</div>
                <div>sdsd</div>
                <div>sdsd</div>
                <div>sdsd</div>
                <div>sdsd</div>
            </div> */}
        </section>
    )
}


// {project.map((item, index) => (
//     <div key={index} className='mt-10'>

//         <Link href={item.link} className='py-5 -mt-3 -mb-8 border-b grid hover:font-bold transition-all'>
//             <p className='flex gap-2'><h1 className='text-xl '>{item.title}</h1> <ArrowUpRightFromSquareIcon className='h-5 w-5 text-gray-500'/> </p>
//             <p className='text-muted-foreground text-sm mt-1'>{item.description}</p>

//         </Link>

//     </div>
// ))}