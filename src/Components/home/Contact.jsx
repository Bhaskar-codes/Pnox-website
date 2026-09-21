import { ArrowUpRight } from 'lucide-react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger.js'

const Contact = () => {

    const sectionReference = useRef()

    useLayoutEffect(() => {

        
        gsap.set(".contact-card", {
            y:250,
             scale:1.1,

        })
        const tl = gsap.timeline({

            scrollTrigger: {
              trigger:sectionReference.current.querySelector(".contact-card"),
              start: "top 90%",
              end:"top 40%",
              markers:true,
                
              scrub:2,
                
                // pin:true,
            }
            
        })
        tl.to(".contact-card", {
            y:0,
           scale:1,
            duration:2,

            })

    })

  return (
    <section ref={sectionReference} className='w-full   h-screen grid grid-rows-[3fr_1fr]  mt-20'>
        <div className='relative p-12  contact-stack '>
            <div className='h-[43rem] grid bg-[var(--bg-invert)] contact-card rounded-[5em] text-white grid-cols-[2.5fr_1fr]  '>
                <div className='flex relative '>
                    <h1 className='font-[font1] absolute tracking-[0.1em]  text-8xl  top-30 left-20 font-semibold  '>  Let"s talk about <br /> your project! </h1>
                    <button className='left-15 text-4xl px-8 py-4 flex items-center justify-center gap-10 bg-[#ddf160] text-black rounded-full font-[font1]   absolute top-[60%] '>Contact Us <span><ArrowUpRight className='size-12'/></span> </button>
                </div>
                <div>
                   
                </div>

            </div>
        </div>
        <div className=' flex items-center justify-center  '>
             <h1 className='font-[font1] font-bold leading-2 pt-5 uppercase text-[10em] '>PNOX Solutions</h1> 
        </div>
    </section>
  )
}

export default Contact
