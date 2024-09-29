import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const ft = [
    {
        id: 'item-1',
        number: '01',
        title: 'Design',
        description: 'I make web designs that engage your audience and create the user experience you want.'
    },
    {
        id: 'item-2',
        number: '01',
        title: 'Design',
        description: 'I make web designs that engage your audience and create the user experience you want.'
    },
    {
        id: 'item-3',
        number: '01',
        title: 'Design',
        description: 'I make web designs that engage your audience and create the user experience you want.'
    },
    {
        id: 'item-4',
        number: '01',
        title: 'Design',
        description: 'I make web designs that engage your audience and create the user experience you want.'
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
                {ft.map((item, index) => (
                    <Accordion type="single" collapsible >
                        <AccordionItem value={item.id}>
                            <AccordionTrigger className='text-3xl' type='single '>{item.number} {item.title}</AccordionTrigger>
                            <AccordionContent className='text-muted-foreground'>
                                {item.description}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}

            </div>
        </section>
    )
}

export default Fetuter
