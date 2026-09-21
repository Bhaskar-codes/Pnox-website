import React from 'react'
import { Sparkles } from 'lucide-react'

const HomeHero = () => {
  return (
    <>
        <div className=' flex items-center justify-center '>
                    <div className='flex text-[var(--text)] items-center gap-6 '><span className='font-[font1] text-9xl text-shadow-cyan-500'>Build,</span>
                        <div className='w-[680px]  flex flex-row relative border rounded-full text-[var(--text)] bg-[#9f8be7] overflow-hidden'>
                            <div className='flex w-max moveX items-center whitespace-nowrap'>
                      <h2 className=' font-[font1]  lg:text-[4vw] text-3xl  px-4 py-2  flex items-center '>Digital Experience
                      <span className='pl-8'><Sparkles strokeWidth={0.75} className='size-18 text-[var(--text)]' /></span>
                      </h2>
                      <h2 className=' font-[font1]  lg:text-[4vw] text-3xl  px-4 py-2  flex items-center '>Digital Experience
                      <span className='pl-8'><Sparkles strokeWidth={0.75} className='size-18'  /></span>
                      </h2>
                      </div>
                      
                      </div>
                    </div>
                   
                </div>
      
        <div className='flex flex-row items-center gap-9.5 font-[font1] text-9xl text-shadow-cyan-500 leading-relaxed mt-2 '>
            <span ><Sparkles strokeWidth={0.75} className='size-24 fill-[var(--text)] stroke-black' /></span> That Stand Out</div>
    </>
  )
}

export default HomeHero
