import { ArrowUpRight } from 'lucide-react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {

    const serviceref = useRef()
    useLayoutEffect(() => {
        const counters = gsap.utils.toArray(".counter")

counters.forEach((counter) => {
  const target = Number(counter.dataset.target)
  const suffix = counter.dataset.suffix
    
  const obj = { value: 0 }

  gsap.to(obj, {
    value: target,
    duration: 2,
    ease: "power2.out",

    scrollTrigger: {
      trigger: counter,
      start: "top 80%",
      toggleActions: "play none none none",
      once: true,
    },

    onUpdate: () => {
      counter.textContent =
        Math.floor(obj.value) + suffix
    },
  })

  const servicebox = gsap.utils.toArray(".servicebox > div")
  const servicebox2 = gsap.utils.toArray(".servicebox2 > div")

  gsap.set(".servicebox", {
    // y:150,
    scale:1.2
  })
  gsap.set(".servicebox2", {
    // y:150,
    scale:1.2
  })
  const tl = gsap.timeline({
    scrollTrigger:{
        trigger: serviceref.current,
        start: "top 80%",
        end: "top 20%",
        duration:2,
        ease:"power1.out",
        scrub:2,
        // stagger: 0.2,
        markers:true
    }

})
  const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: serviceref.current,
        start: "top 70%",
        end: "top 10%",
        duration:2,
        ease:"power1.out",
        scrub:2,
        stagger: 0.2,
        markers:true
    }

})
tl.to(".servicebox",{
    // y:0,
    scale:1
})
tl2.to(".servicebox2",{
    // y:0,
    scale:1
})



})
    })
  return (
    <section ref={serviceref} className='w-full px-12 py-20'>
        <div className='servicebox grid grid-cols-[1fr_1.4fr]  gap-6'>

            {/* box1 */}
            <div className='h-[400px]  rounded-[30px] font-bold bg-[#9f8be7] p-6 pl-0'>
                  <div className='grid h-full grid-cols-[1.5fr_1fr] '>
                      <div>
                        <img className='pl-0  pt-0 object-cover ' src="../src/images/800x800_card-image-01.webp" alt="" srcset="" />
                      </div>
                    <div className='flex flex-col items-center justify-between font-[font1] text-[var(--text)]'>
                        <div className='flex flex-col items-center justify-center gap-3 '>
                        <h1 className='text-7xl counter '
                          data-target="100"
  data-suffix="%"
                        >0+</h1>
                        <p className='text-2xl pl-8   '>Successful Projects</p>

                        </div>
                        <button className='border flex items-center gap-4 px-4 py-4 text-4xl text-nowrap  rounded-full cursor-pointer border-2 mb-4'>Our Projects <span><ArrowUpRight className='size-12'/></span> </button>
                    </div>
                  </div>
            </div>

            {/* box2 */}
            <div className='h-[400px] bg-white rounded-[30px]  overflow-hidden'>
                <div className='grid grid-cols-[2fr_1fr] h-full'>
                    <div className=''>
                        <img className='h-full object-cover  brightness-90' src="https://i.pinimg.com/736x/26/66/33/26663385cf4068a85a48b815934d2251.jpg" alt="" srcset="" />
                    </div>
                    <div className='flex flex-col items-center justify-between'>
                        <div></div>
                        <div className='font-[font1]  mb-32 flex flex-col gap-8  items-center  '>
                            <h2 className='counter text-8xl font-bold'
                              data-target="80"
  data-suffix="%"
                            >0%</h2>
                            <p className='max-w-[15rem] text-gray-600 text-2xl'>Clients Come back for a new project</p>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>

        <div className='servicebox2 grid grid-cols-[1.4fr_1fr] gap-6 mt-6'>

            {/* box3 */}
            <div className='h-[400px] rounded-[30px]  bg-gray-400 overflow-hidden  '>
                <div className='grid grid-cols-[1.5fr_2fr] h-full'>
                    <div className='flex flex-col items-center justify-between p-12'>
                        <div className='font-[font11] flex flex-col h-full items-center gap-5'>
                        <h2 className='text-5xl text-white text-wrap '>Partner With PNOX Solutions</h2>
                        <p className='text-2xl'>— Let’s Grow Together</p>

                        </div>
                        <button className=' font=[font1] mb-20 rounded-full text-white border-2 border-white px-8 py-4 cursor-pointer text-4xl flex text-nowrap items-center gap-4  '>Apply Now <span><ArrowUpRight className='size-12'/></span></button>
                    </div>
                    <div>
                        <img className='h-full object-cover ' src="../src/images/800x800_card-image-03.webp" alt="" srcset="" />
                    </div>

                </div>
            </div>

            {/* box4 */}
            <div className='h-[400px] rounded-[30px] p-6'>
                <div className='grid grid-cols-[1.5fr_1fr] gap-4 '>
                    <div className='flex flex-col  gap-3'>
                        <p className='items-center flex font-serif pl-24 text-[20px] text-gray-500'>Our Approach----</p>
                        <div className='text-4xl leading-snug uppercase font-[font1] font-bold '>

                        <h1>Strategy.</h1>
                        <h1>Creativity.</h1>
                        <h1>Technology.</h1>
                        <h1>Impact.</h1>
                        </div>
                        <p className='text-xl  text-gray-600 font-[font1]'>Turning ideas into solutions that moves buisness forward</p>
                        <button className='border font=[font1] mb-2 rounded-full text-white bg-[#9f8be7] border-2 cursor-pointer border-white px-8 py-4 text-4xl flex text-nowrap items-center gap-4  '>Our Process <span><ArrowUpRight className='size-12'/></span></button>
                    </div>
                    <div>
                        <img className='h-full w-full object-cover' src="https://i.pinimg.com/1200x/8e/e2/4f/8ee24f184faf6e003bad128fd6869c11.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Services
