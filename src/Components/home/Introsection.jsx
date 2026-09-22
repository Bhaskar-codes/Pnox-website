import React from 'react'
import {ArrowUpRight} from 'lucide-react'
import bgImage from "../../images/92596243557cdeaa2762c878e34473de.jpg"

const Introsection = () => {
  return (
    <section className='w-full flex justify-center '>
        <div className='relative w-[85vw] h-[80vh] border-2 mt-12 border-[var(--text)] overflow-hidden'>
            <img 
            className='absolute object-cover opacity-85 brightness-40 inset-0 h-full w-full'
            src={bgImage} alt="" srcset="" />

            <div className='relative z-10 h-full  flex items-center justify-center text-white '>
                <div className='text-center flex flex-col items-center gap-16 '>
                    <h1 className='font-[font1] text-7xl font-bold max-w-[55vw]'>Building Smarter Digital Solutions for a Smarter Future</h1>
                    <p className='leading-relaxed max-w-[55vw] text-2xl text-gray-300'>From development to outsourcing, we deliver innovative, secure,
and scalable technology solutions that empower businesses, 
accelerate growth, and ensure success</p>
<button className='font-[font1] text-4xl border-2 flex items-center justify-center gap-6 px-8 py-4 bg-[#ffffff99] cursor-pointer transition-all duration-[0.8s] hover:scale-[1.05] hover:underline hover:bg-[#9f8be7] hover:text-[var(--text)]text-black rounded-full'>Explore Solutions <span> <ArrowUpRight className='size-12' /></span></button>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Introsection
