import Link from 'next/link'
import React from 'react'


export const project = [
    {
        title: 'URL Shortener',
        description: 'A full-stack application that provides a streamlined, efficient way to shorten URLs. Built with Next.js and Node.js, the app offers customizable links and analytics for tracking user engagement.',
        link: 'https://miniurl.dayanandgawade.in',
    },
    {
        title: 'Tailwind CSS Bg Gradient',
        description: 'Tailwind CSS Background Gradient Plugin',
        link: 'https://tailwind-bg-tawny.vercel.app/',
    },
    {
        title: 'MusicHub',
        description: 'Developed a responsive, interactive music app with React and Node.js. The app features a clean interface, playlist management, and a recommendation system based on user preferences.',
        link: 'https://musichub.dayanandgawade.in'
    },
    {
        title: 'YouTube Clone',
        description: 'Building a YouTube Clone with the YouTube Data API v3',
        link: 'https://yt.dayanandgawade.in'
    },
    {
        title: 'File Shareing Site',
        description: 'Share File By using URL',
        link: 'https://file-share-site-ten.vercel.app'
    },
]

export default function Projects() {

    return (
        <section className='px-8 md:px-24 lg:px-24 mt-28 -mb-6' id='projects'>
            <h1 className='text-4xl font medium'>Selected Work <span className='text-base text-muted-foreground'>(4)</span></h1>
            {project.map((item, index) => (
                <div key={index} className='mt-10'>

                    <Link href={item.link} className='py-5 -mt-3 -mb-8 border-b grid'>
                        <h1 className='text-xl'>{item.title}</h1>
                        <p className='text-muted-foreground text-sm mt-1'>{item.description}</p>

                    </Link>

                </div>
            ))}
        </section>
    )
}


