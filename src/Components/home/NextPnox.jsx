import React from 'react'
import { HeartCrack, Brain, ChartNoAxesCombined, StarPlus, UserRoundGroup, Handshake, WrenchOff, FlaskConical   } from 'lucide-react'

const NextData = [
    {
        heading: "Expand AI & LLM services",
        para: "Target new industries and domains.",
        icon: <HeartCrack />,
    },
    {
        heading: "Build Multimodal AI",
        para: "Combine text, image, video, and speech.",
        icon: <Brain />,
    },
    {
        heading: "Cross ₹5 Cr+ mark",
        para: "Deliver high-impact global projects.",
        icon: <ChartNoAxesCombined />,
    },
    {
        heading: "Set GenAI Benchmarks",
        para: "Lead with LLM factuality and precision.",
        icon: <StarPlus />,
    },
    {
        heading: "Strengthen Our Team",
        para: "Grow with world-class engineers and talent.",
        icon: <UserRoundGroup />,
    },
    {
        heading: "Enterprise AI Partner",
        para: "Establish trust globally with scalable AI.",
        icon: <Handshake />,
    },
    {
        heading: "AI Ops Tools",
        para: "Simplify operations using automation at scale.",
        icon: <WrenchOff />,
    },
    {
        heading: "R&D Investment",
        para: "Push boundaries in emerging tech.",
        icon: <FlaskConical />,
    },
  
]

const NextPnox = () => {
  return (
   <section className='w-full h-100 '>
    <div className='grid grid-cols-3 gap-4 p-20 ' >

        {NextData.map((next, index) => (

        <div className=' h-30 flex items-center transition hover:scale-105 cursor-pointer hover:bg-[#9f8be7] bg-gray-400 rounded-4xl justify-around
         '>
            <div>
            <span >{next.icon}</span>

            </div>
            <div className='text-justify'>
            <h2 className='text-2xl font-[font1] font-bold'>{next.heading}</h2>
            <p className='font-[font1] text-justify text-gray-700'>{next.para}</p>

            </div>
        </div>
        ))}

    </div>

   </section>
  )
}

export default NextPnox
