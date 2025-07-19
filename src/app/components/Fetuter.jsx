"use client";
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight, Zap, Palette, Code, Rocket } from 'lucide-react'

const processSteps = [
    {
        number: '01',
        title: 'UX / Wireframing',
        description: 'Here we map out the elements clearly, so you can see what elements will be built into the end-product, and have a better idea of the intended behavior end-users will have while using it.',
        icon: Zap,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50 dark:bg-blue-950',
        borderColor: 'border-blue-200 dark:border-blue-700'
    },
    {
        number: '02',
        title: 'Web Design',
        description: 'Based on the previous step of building a prototype for your idea, I design the best solution you can have for your business\' image.',
        icon: Palette,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-50 dark:bg-purple-950',
        borderColor: 'border-purple-200 dark:border-purple-700'
    },
    {
        number: '03',
        title: 'Web Development',
        description: 'I build and test your new high-performance website, for every device. Using any tech stack and framework you prefer (nextjs, reactjs, nodejs, etc).',
        icon: Code,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-50 dark:bg-green-950',
        borderColor: 'border-green-200 dark:border-green-700'
    },
    {
        number: '04',
        title: 'Deployment',
        description: 'I will deploy your new website to the cloud or your local server.',
        icon: Rocket,
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-50 dark:bg-orange-950',
        borderColor: 'border-orange-200 dark:border-orange-700'
    },
]

function ProcessSection() {
    const [hoveredStep, setHoveredStep] = useState(null)

    return (
        <section className='px-6 md:px-20 lg:px-24 py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-black relative overflow-hidden'>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className='relative z-10 max-w-7xl mx-auto'>

                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6'>
                        <Zap className='w-4 h-4' />
                        My Process
                    </div>
                    <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-6 leading-tight'>
                        My way of getting
                        <br />
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-300 dark:to-purple-400'>
                            things done
                        </span>
                    </h1>
                    <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
                        Fast and transparent, the path to owning a website that will represent your brand in the best light is only 4 weeks away. Following the Waterfall methodology, I ensure step-by-step completion of the entire process.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-8 mb-16'>
                    {processSteps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div
                                key={index}
                                className={`group relative p-8 rounded-3xl border-2 ${step.borderColor} ${step.bgColor} hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
                                onMouseEnter={() => setHoveredStep(index)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                <div className='flex items-start gap-6'>
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                        <Icon className='w-8 h-8 text-white' />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white shadow-md`}>
                                                {step.number}
                                            </span>
                                            <h3 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors'>
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                            </div>
                        )
                    })}
                </div>

                <div className='hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800'></div>

                <div className='text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden'>
                    <div className="absolute inset-0 bg-black opacity-10 dark:opacity-30"></div>
                    <div className='relative z-10'>
                        <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                            Ready to bring your vision to life?
                        </h3>
                        <p className='text-blue-100 dark:text-blue-200 mb-6 text-lg'>
                            Let's start your 4-week journey to a stunning website.
                        </p>
                        <button className='bg-white text-blue-600 dark:bg-slate-100 dark:text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl'>
                            Get Started Today
                            <ChevronRight className='w-5 h-5' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessSection
