import { ArrowUpRight } from 'lucide-react'
import React, { useRef } from 'react'
import gsap from 'gsap/all'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const MorphePnox = () => {

  const secref = useRef()

  useLayoutEffect(() => {
 
    const divbox = gsap.utils.toArray(".opening-boxes > div")
    // const section = gsap.utils.toArray(".opening")
    // const divss = gsap.utils.toArray("")

    gsap.set(".opening",{
      y:100,
      opacity:0
    })
       gsap.set(divbox[0],{
      y:100,
      opacity:0
      // stagger:0.2
    })
       gsap.set(divbox[1],{
      y:120,
      opacity:0
      // stagger:0.2
    })
       gsap.set(divbox[2],{
      y:130,
      opacity:0
      
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: secref.current.querySelector(".opening"),
        start: "top 80%",
        end: "top 30%",
        // markers:true,
        scrub: 2,
        
      },
    })

    tl.to(".opening", {
      y:0,
      opacity:1,
      ease: "power2.out"
    })
    tl.to(divbox[0],{
        y:0,
        opacity:1,
        ease: "power2.out"
    })
    tl.to(divbox[1],{
        y:0,
        opacity:1,
        ease: "power2.out"
    })
    tl.to(divbox[2],{
        y:0,
        opacity:1,
        ease: "power2.out"
    })
    // tl.to(divbox[1],{
    //   stagger:0.2
    // })
    // tl.to(divbox[2],{
    //   stagger:0.2
    // })


    })



  return (
    <section ref={secref} className=' w-full'>
      <div className=' opening w-full p-12 pt-0 grid grid-rows-[0.5fr_2fr] h-screen '>
     <div className='flex items-center justify-between  '>
       <h2 className='text-6xl leading-16 font-[font1] font-bold '>Current <br /> Opening</h2>
       <p className='w-[22vw] text-xl text-gray-600 font-[font1]'>Inspiring ideas, creative insights, and the latest in design and tech. Fueling innovation for your digital journey.</p>
       <button className='border px-8 py-4 rounded-full text-2xl font-[font1] font-bold cursor-pointer flex items-center justify-center gap-4'> View Open Positions <ArrowUpRight className='size-8'/> </button>
     </div>
     <div className='opening-boxes grid grid-cols-3 items-end gap-4 '>
      <div className=' gap-2 h-[35rem] grid grid-rows-[2fr_0.5fr]'>
        <div className='w-full overflow-hidden cursor-pointer  rounded-4xl '>
          <img className='object-cover h-full ' src="https://i.pinimg.com/1200x/0f/f2/47/0ff247447dc7d5bb40644a06f08255b0.jpg" alt="" srcset="" />
           <div className='relative text-black pl-8 flex gap-6 bottom-12 text-xl'>
            <span className=' px-4 py-1 rounded-full bg-white hover:underline '>React.js</span>
            <span className=' px-4 py-1 rounded-full bg-white hover:underline '>Bootstrap</span>
          </div>
        </div>
        <div className=' cursor-pointer flex items-center flex-col justify-center font-[font1] gap-4  '>
          <h1 className='text-4xl font-bold '>Frontend Developer</h1>
          <p>Full-Time • Remote</p>
        </div>
      </div>



      <div className=' gap-2 h-[35rem] grid grid-rows-[2fr_0.5fr]'>
        <div className=' w-full overflow-hidden cursor-pointer  rounded-4xl '>
          <img className=' h-full w-full object-cover' src="https://i.pinimg.com/736x/a3/5f/ce/a35fce50d081f05675acdbba3c62bd0a.jpg" alt="" srcset="" />
          
          <div className='relative text-black pl-8 flex gap-6 bottom-12 text-xl'>
            <span className=' px-4 py-1 rounded-full bg-white hover:underline '>Node.js</span>
            <span className=' px-4 py-1 rounded-full bg-white hover:underline '>Express</span>
          </div>
        </div>
        <div className=' cursor-pointer  flex items-center flex-col justify-center font-[font1] gap-4 '>
          <h1 className='text-4xl font-bold '>Backend Developer</h1>
          <p>Full-Time • Global</p>
        </div>
      </div>



      <div className=' gap-2 h-[35rem] grid grid-rows-[2fr_0.5fr]'>
        <div className='w-full overflow-hidden cursor-pointer  rounded-4xl '>
          <img className='w-full object-cover h-full ' src="https://i.pinimg.com/236x/f5/00/e7/f500e7221c3e4b2ed55a3891c0cbd2ba.jpg" alt="" srcset="" />
           <div className='relative text-black pl-8 flex gap-6 bottom-12 text-xl'>
            <span className=' px-4 py-1 rounded-full bg-white hover:underline '>Testing</span>
            <span className=' px-4 py-1 rounded-full bg-white hover:underline '>Reporting</span>
          </div>
        </div>
        <div className=' cursor-pointer  flex items-center flex-col justify-center font-[font1] gap-4  '>
          <h1 className='text-4xl font-bold '>Security Analyst</h1>
          <p>Contract • Mumbai / Hybrid</p>
        </div>
      </div>
     </div>
    </div>
    </section>
  )
}

export default MorphePnox
