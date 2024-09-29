import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const ft = [
    {
        number: '01.',
        title: 'UX / Wireframing',
        description: 'Here we map out the elements clearly, so you can see what elements will be built into the end-product, and have a better idea of the intended behavior end-users will have while using it.'
    },
    {
        number: '02.',
        title: 'Web Design',
        description: 'Based on the previous step of building a prototype for your idea, I design the best solution you can have for your business’ image.'
    },
    {
        number: '03.',
        title: 'Web Development',
        description: 'I build and test your new high-performance website, for every device. Using any tech stack and framework you prefer (nextjs,reactjs, nodejs, etc).'
    },
    {
        number: '04.',
        title: 'Deployment',
        description: 'I will deploy your new website to the cloud. or your local server.'
    },
]

function Fetuter() {
    return (
        <section className=' px-6 md:px-20 lg:px-24 mt-28 md:flex gap-24 mb-5'>
            <div className='grid gap-5 mb-10 max-w-lg'>
                <h1 className='text-5xl font-semibold'>My way of getting things done</h1>
                <p className='text-md text-muted-foreground'>Fast and transparent, the path to owning a website that will represent your brand in the best of light is only 4 weeks away. Standing by the Waterfall methodology, I assure a step by step completion of the whole process.</p>
            </div>

            <div className='w-full'>

                <Accordion type="single" collapsible >
                    {ft.map((item, index) => (
                        <AccordionItem value={"item" + index}>
                            <AccordionTrigger className='text-3xl' type='single '>{item.number} {"  "} {item.title}</AccordionTrigger>
                            <AccordionContent className='text-muted-foreground'>
                                {item.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>


            </div>
        </section>
    )
}

export default Fetuter
