import React from 'react'

function Section() {
    return (
        <section className='px-[95px] mt-5 mb-3'>
            <h1 className='text-4xl'>I can help you with ....</h1>

            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 mt-2   '>
                <div className='grid gap-1 md:border-r md:ml-2 md:px-2 py-3 md:py-0 md:-mt-0 -mt-3 md:border-b-0 border-b'>
                    <h1 className='text-3xl text-muted-foreground mt-4'>01</h1>
                    <h2 className='mt-7 text-xl'>Design</h2>
                    <p className='text-muted-foreground'>I make web designs that engage your audience and create the user experience you want.</p>
                </div>
                <div className='grid gap-1 md:border-r md:ml-2 md:px-2 py-3 md:py-0 md:-mt-0 -mt-3 md:border-b-0 border-b'>
                    <h1 className='text-3xl text-muted-foreground mt-4'>02</h1>
                    <h2 className='mt-7 text-xl'>Development</h2>
                    <p className='text-muted-foreground'>Bringing visuals to life through developing highly functional web solutions.</p>
                </div>
                <div className='grid gap-1 md:border-r md:ml-2 md:px-2 py-3 md:py-0 md:-mt-0 -mt-3 md:border-b-0 border-b'>
                    <h1 className='text-3xl text-muted-foreground mt-4'>03</h1>
                    <h2 className='mt-7 text-xl'>The Full Pakage</h2>
                    <p className='text-muted-foreground'>Get the best of both worlds for your website, capture your brand identity and get fully functional features.</p>
                </div>

            </div>
        </section>
    )
}

export default Section
