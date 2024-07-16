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
        title: 'Project 2',
        description: 'This is another project',
        img: 'https://via.placeholder.com/150',
        url: 'https://example.com'
    },
    {
        title: 'Project 2',
        description: 'This is another project',
        img: 'https://via.placeholder.com/150',
        url: 'https://example.com'
    },
    {
        title: 'Project 2',
        description: 'This is another project',
        img: 'https://via.placeholder.com/150',
        url: 'https://example.com'
    }
];

function Projects() {
  return (
    <div className='text-center mt-20 p-8'>
      <h1 className='text-4xl font-serif font-bold mb-8'>Projects</h1>
      
      <div className='p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8  '>
        {projects.map((project, index) => (
          <a key={index} href={project.url} className='block bg-white p-4 border border-gray-300 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <img src={project.img} alt={project.title} className='w-full max-h-40 sm:max-h-30  object-fit rounded-3xl mb-4' />
            <h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
            <p className='text-gray-700'>{project.description}</p>
            <Link href={project.url}><Button className='mt-3 rounded-3xl'>Live Site</Button></Link>
          </a>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Projects;
