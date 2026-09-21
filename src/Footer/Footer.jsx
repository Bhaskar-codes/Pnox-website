import { ArrowRight, ArrowUpRight, Copyright } from 'lucide-react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

    const contref = useRef()
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const boxes = gsap.utils.toArray(".footer-main > div")

    const tl = gsap.timeline({
      paused: true,
    })

    boxes.forEach((box, index) => {
      const items = box.querySelectorAll(".footer-item")

      tl.from(
        box,
        {
          y: 500,
          duration: 2,
          ease: "power3.out",
        },
        index === 0 ? 0 : "-=1.85"
      )

      tl.from(
        items,
        {
          y: 15,
          opacity: 0,
          duration: 0.4,
          stagger: 0.04,
          ease: "power2.out",
        },
        "-=1.4"
      )
    })

    ScrollTrigger.create({
      trigger: contref.current,
      start: "top 60%",
      // markers: true,

      onEnter: () => {
        tl.play()
      },

      onLeaveBack: () => {
        tl.reverse()
      },
    })

  }, contref)

  return () => ctx.revert()
}, [])

  return (
    <section ref={contref} className='h-[90vh] mt-20  w-full overflow-hidden  '>
        <div className='footer-main grid grid-cols-3 text-[var-(--text)] gap-8 h-full pb-10 pl-10 pr-10'>
            {/* box1 */}
            <div className=' rounded-4xl bg-[#ffffffd7] h-full gap-5 grid  grid-rows-[2fr_0.2fr]'>
                {/* box1 */}
                    <div className=' pt-12  p-12 text-5xl gap-6 font-[font1] font-semibold flex flex-col '>
                        <span className='footer-item'>Home</span>
                        <span className='footer-item'>About us</span>
                        <span className='footer-item'>Works</span>
                        <span className='footer-item'>Services</span>
                        <span className='footer-item'>Insights</span>
                        <span className='footer-item'>Contact</span>
                    </div>
                    <div className='flex justify-around mb-20  '>
                        <span className='flex footer-item items-center justify-center gap-6 text-gray-400 font-[font1]'>Privacy Policy <span><ArrowRight/></span> </span>
                        <span className='flex footer-item items-center justify-center gap-6 text-gray-400 font-[font1]'>Terms $ Conditions <span><ArrowRight/></span> </span>
                    </div>
                
            </div >

            {/* box2 */}
            <div className='grid grid-rows-[1fr_1fr_3fr] p-6 gap-8 '>
                <div className='flex items-center justify-center bg-[#ffffffd7] rounded-4xl text-black text-3xl '>
                    <h3 className='footer-item'>hello@rayostudio.com</h3>
                </div>
                <div className='flex  items-center justify-center bg-[#ffffffd7] rounded-4xl text-black text-3xl '>
                    <h3 className='footer-item'>+1 212-708-9400</h3>
                </div>
                <div className='flex   items-center justify-around flex-col  bg-[#ffffffd7] rounded-4xl text-black text-3xl '>
                    <h3 className='font-[font1] footer-item text-5xl max-w-[80%] font-bold leading-15'>Subscribe to our insights:</h3>

                    <div>

                     <div className="flex items-center gap-4">
    <input
      type="email"
      placeholder="Your Email"
      className="footer-item flex-1 bg-transparent text-[26px] text-gray-600 placeholder:text-gray-500 outline-none"
      />

    <ArrowUpRight className='footer-item' size={32} strokeWidth={1.5} />
  </div>
   <div className="mt-5 footer-item h-[2px] w-[22vw] bg-black"></div>
      </div>
                </div>
            </div>

            {/* box3 */}
            <div className=' rounded-4xl bg-[#ffffffd7] h-full gap-5 grid p-12  grid-rows-[2fr_0.2fr] '>

                <div className='flex flex-col gap-8 font-[font1]'>

                <h1 className=' footer-item text-5xl font-bold '>Ecosystem</h1>
                <div className='flex flex-col gap-5 font-[font1] text-3xl text-gray-600'>

                <span className='footer-item'>Dribbble</span>
                <span className='footer-item'>Behance</span>
                <span className='footer-item'>Instagram</span>
                <span className='footer-item'>Github</span>
                <span className='footer-item'>Codepen</span>
                <span className='footer-item'>Figma Community</span>
                </div>
                </div>
                <div className='font-[font1] text-gray-500' >
                    <span className='flex footer-item items-center'>ib themes <span>  <Copyright className='size-4' /></span> 2026</span>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Footer
