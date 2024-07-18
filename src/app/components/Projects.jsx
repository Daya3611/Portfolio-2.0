import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';

// Sample data for projects
const projects = [
    {
        title: 'Agricart FPC Shop Site',
        description: 'This is a project',
        img: '/agricart-shop.png',
        url: 'https://agricart-shop-4-25.vercel.app/'
    },
    {
      title: 'Tailwind CSS Bg Gradient',
      description: 'Tailwind CSS Background Gradient Plugin',
      img: '/tailwindbg.png',
      url: 'https://tailwind-bg-tawny.vercel.app/'
    },
    {
        title: 'File Shareing Site',
        description: 'Share File By using URL',
        img: '/file-uplode.png',
        url: 'https://file-share-site-ten.vercel.app/'
    }
];

function Projects() {
  return (
    <div className='text-center mt-20 p-8'>
      
      <h1 className='text-3xl font-sans font-extrabold sm:text-1xl md:text-1xl lg:text-5xl'>Projects</h1>
      
      <div className='p-4 mt-5'>
        
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8  '>
        
        {projects.map((project, index) => (
          
          <a key={index} href={project.url} className='block bg-white dark:bg-black p-4 border dark:border-gray-700 dark:shadow-lg dark:shadow-gray-800 dark:hover:shadow-xl dark:transition-shadow dark:duration-300 border-gray-300 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:text-white'>
            <img src={project.img} alt={project.title} className='w-full max-h-40 sm:max-h-30   object-fit rounded-3xl mb-4' />
            <h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
            <p className='text-gray-700 dark:text-gray-400'>{project.description}</p>
            <Link href={project.url}><Button className='mt-3 rounded-3xl bg-blue-600 dark:text-white'>Live Site</Button></Link>
          </a>
          
        ))}
        
      </div>
      </div>
    </div>
  );
}

export default Projects;


//