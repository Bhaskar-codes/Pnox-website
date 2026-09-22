import React, { useContext, useRef } from 'react'
import { NavContext } from './NavContext'
import logo from '../../images/logo-B-B1OQ5AP3.jpg'
import { Sparkle } from 'lucide-react'
import video from "../../images/540x310_video-01.mp4"
import gsap from 'gsap/all'
import _ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
// import { useRef } from 'react'

// gsap.registerPlugin(ScrollTrigger)

const FullScreenNav = () => {
    const { isNavOpen, setisNavOpen } = useContext(NavContext)
    const  navRef = useRef(null)

//    const navRef = useRef(null)

useLayoutEffect(() => {
  gsap.set(navRef.current, {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
  })
}, [])

useLayoutEffect(() => {
  gsap.to(navRef.current, {
    clipPath: isNavOpen
      ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      : "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
    duration: 1,
    ease: "power3.inOut",
  })
}, [isNavOpen])



  return (
    <div className=' relative '>
      <div 
      ref={navRef}
      className=' nav-box fixed top-5 right-16 z-[110] h-[50rem] w-[90vw] grid grid-cols-2 rounded-[60px] bg-black transition-transform duration-500
      '
      >
        <div className='  overflow-hidden  text-white p-10  '>
             <div className=' pl-5'>
                <img className="h-28 w-auto invert  " src={logo} alt="PnoX logo" />
             </div>
             <div className='flex flex-col gap-6 font-[font1] font-light tracking-[0.05em] text-5xl p-10'>
                <span className=' flex justify-between items-center group cursor-pointer'>Home <Sparkle className='size-7 group-hover:text-[#9f8be7]' /></span>

                <span className='flex justify-between items-center group cursor-pointer'>About us <Sparkle  className='size-7  group-hover:text-[#9f8be7]'/></span>

                <span className='flex justify-between items-center group cursor-pointer'>Works <Sparkle className='size-7 group-hover:text-[#9f8be7]' /></span>

                <span className='flex justify-between items-center group cursor-pointer'>Services <Sparkle className='size-7 group-hover:text-[#9f8be7]' /></span>

                <span className='flex justify-between items-center group cursor-pointer'>Insights <Sparkle  className='size-7 group-hover:text-[#9f8be7]'/></span>

                <span className='flex justify-between items-center group cursor-pointer'>Contact <Sparkle className='size-7 group-hover:text-[#9f8be7]' /></span>
             </div>
              <div className=' text-gray-400 bottom-20 left-30 tracking-[0.2em] absolute text-black '>
                    <h3 className=''>hello@pnoxsulution.com</h3>
                </div>
        </div>

        {/* box2 right side */}

        <div className='grid  grid-rows-2  text-white p-12  '>
            <div className='w-full  '>
                <p className=' w-[26vw] font-[font1] text-gray-300 text-[18px]  absolute  right-15 top-[28%]  '>At PNOX Solutions, we're always eager to help
you with your business goals. If you're ready to discuss
how we can support your project or provide tech solutions, reach out to us today!</p>
            </div>
            <div className='w-full  flex  justify-end overflow-hidden   '>
                <video className='play  right-0 object-cover rounded-4xl bottom-0 relative' src={video}
                
                autoPlay
                muted
                loop
                playsInline
                ></video>
            </div>
        </div>


      </div>
    </div>
  )
}

export default FullScreenNav
