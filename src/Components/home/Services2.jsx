import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Services2 = () => {

const sectionRef = useRef()

useLayoutEffect(() => {
  const cards = gsap.utils.toArray(".card")

  // Initial position
  gsap.set(cards[0], {
    y: 0,
    zIndex: 10,
  })

  gsap.set(cards[1], {
    y: 610,
    zIndex: 20,
  })

  gsap.set(cards[2], {
    y:610,
    zIndex: 30,
  })

  gsap.set(cards[3], {
    y:610,
    zIndex: 40,
  })

  // Scroll animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current.querySelector(".card-stack"),
      start: "bottom+=10% bottom",
      end: "+=1800",
      scrub: 1,
      pin: true,
    },
  })

  tl.to(cards[1], {
    y: 0,
  })
  .to(cards[2], {
    y: 0,
  })
  .to(cards[3], {
    y: 0,
  })

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }
}, [])
  return (
    <section  ref={sectionRef}  className='relative'>

        <div className='relative w-full h-[2400px]  p-14 mt-12  '>

              <div className='card-stack relative w-full h-[550px]  '>

             
            {/* box1 */}
            <div className='card absolute inset-0  border h-[550px]   grid grid-cols-2  rounded-4xl bg-gray-800'>
                <div className=' p-12 text-white flex flex-col justify-between border-white'>
                    <h1 className='text-6xl font-[font1] leading-17'>Web/Mobile App developMent</h1>
                    <div>

                    <div className='grid grid-cols-3 gap-4 font-[font1] mb-7 '>
                          <span className='border flex items-center justify-center text-nowrap px-4 py-2 rounded-full '>Responsive Websites</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Mobile Applications</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>React Development</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Cross-Platform Apps</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>API Integration</span>
                    </div>
                    <p className='text-gray-400'>We build fast, responsive websites and mobile applications that deliver seamless experiences, engage users, and help businesses grow across digital platforms.</p>
                    </div>
                </div>

                {/* right */}
                <div className='relative overflow-hidden '>
                    <span className='absolute flex items-center justify-center w-25 right-2 top-2  h-25   rounded-full text-black bg-yellow-300'><ArrowUpRight className='size-14 stroke-1'/></span>
                  
                  <img 
                  className='absolute bottom-0 brightness-95 left-1/2 -translate-x-1/2 w-[90%] h-[100%] object-cover '
                  src="../src/images/33c8ac07c910fee3a6eb22b0ba0efe45-removebg-preview.png" alt="" />
                </div>
            </div>

            {/* box2 */}
            <div className='card absolute inset-0  border h-[550px] grid grid-cols-2 text-white rounded-4xl bg-[#9f8be7]'>
                <div className=' p-12 flex flex-col justify-between border-white'>
                    <h1 className='text-6xl font-[font1] leading-17'>Cloud/DevOps Solutions</h1>
                    <div>

                    <div className='grid grid-cols-3 text-white font-[font1] gap-4 mb-7 '>
                      <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Cloud Migration</span>
                      <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Cloud Security</span>
                      <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Infrastructure</span>
                      <span className='border flex items-center justify-center px-4 py-2 rounded-full '>CI/CD</span>
                      <span className='border flex items-center justify-center px-4 py-2 rounded-full '>AWS / Azure</span>
                    </div>
                    <p className='text-gray-100'>We provide secure, scalable cloud and DevOps solutions that improve performance, automate workflows, strengthen infrastructure, and keep your business future-ready.</p>
                    </div>
                </div>

                {/* right */}
                <div className='relative '>
                    <span className='absolute flex items-center justify-center w-25 right-2 top-2  h-25   rounded-full text-black bg-white'><ArrowUpRight className='size-14 stroke-1'/></span>
                     <img 
                  className='absolute bottom-0 left-1/2 brightness-95  -translate-x-1/2 w-[90%] h-[100%] object-cover '
                  src="../src/images/d05114327f82101fb7d72bbb0de14834-removebg-preview.png" alt="" />
                </div>
            </div>

            {/* box3 */}
            <div className='card absolute inset-0  h-[550px] grid grid-cols-2 bg-white text-black rounded-4xl'>
                <div className=' p-12 flex flex-col justify-between '>
                    <h1 className='text-6xl font-[font1] leading-17'>Custom Software Development</h1>
                    <div>

                    <div className='grid grid-cols-3 gap-4 font-[font1] mb-7 '>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Business Software</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Custom Applications</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>API Development</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>System Integration</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Scalable Solutions</span>
                    </div>
                    <p className='text-gray-400'>We create powerful, scalable software tailored to your business needs, streamlining operations, solving complex challenges, and supporting long-term growth.</p>
                    </div>
                </div>

                {/* right  */}
                <div className='relative'>
                    <span className='absolute flex items-center justify-center w-25 right-2 top-2  h-25  rounded-full text-white bg-black'><ArrowUpRight className='size-14 stroke-1'/></span>
                     <img 
                  className='absolute bottom-0 left-1/2 brightness-95  -translate-x-1/2 w-[90%] h-[100%] object-cover '
                  src="../src/images/26da9660df7fcc9d3961eeb0e05951cd-removebg-preview.png" alt="" />
                </div>
            </div>

            {/* box4 */}

            <div className='card absolute inset-0  border h-[550px] grid grid-cols-2  rounded-4xl text-white bg-gray-800'>
                <div className=' flex p-12 flex-col justify-between border-white'>
                    <h1 className='text-6xl font-[font1] leading-17'>UI/UX Design</h1>
                    <div>

                    <div className='grid grid-cols-3 gap-4 font-[font1] mb-7 '>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>UI Design</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>UX Research</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Prototyping</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Design Systems</span>
                        <span className='border flex items-center justify-center px-4 py-2 rounded-full '>Interaction Design</span>
                    </div>
                    <p className='text-gray-400'>We design intuitive and engaging digital experiences that combine creativity, usability, and thoughtful interactions to make every product simple and memorable.</p>
                    </div>
                </div>

                <div className='relative'>
                    <span className='absolute flex items-center justify-center w-25 right-2 top-2  h-25   rounded-full text-white bg-yellow-300'><ArrowUpRight className='size-14 stroke-1'/></span>
                     <img 
                  className='absolute bottom-0 left-1/2 brightness-95  -translate-x-1/2 w-[90%] h-[100%] object-contain '
                  src="../src/images/fbbc6ad995acd4fd77a74457f9fb0f45-removebg-preview.png" alt="" />
                    
                </div>
                </div>
                 </div>
                </div>
                </section>
  )
}

export default Services2
