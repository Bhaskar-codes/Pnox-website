import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect } from 'react'
import { NavContext } from '../Navbar/NavContext'
import { useContext } from 'react'
import heroImg from "../../images/03_hero-img.webp"


gsap.registerPlugin(ScrollTrigger)

const Approach = () => {

    const { isDark } = useContext(NavContext)
   useLayoutEffect(() => {

  const span = gsap.utils.toArray(".approach-title span")

  const activeColor = isDark ? "#ffffff" : "#000000"

  gsap.set(span, {
    color: "#9ca3af",
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".approach-title",
      start: "top 90%",
      end: "bottom 60%",
      scrub: true,
    }
  })

  tl.to(span[0], {
    color: activeColor,
  })
  .to(span[1], {
    color: activeColor,
  })
  .to(span[2], {
    color: activeColor,
  })

}, [isDark])

   

  return (
    <section className='w-full  mt-22'>
        <div className='grid grid-rows-4 p-16 gap-12' >
            
            {/* box1 */}
      <div className=' approach-intro flex items-center h-[4rem]  justify-between'>
        <h1 className='approach-title font-[font1] text-[var(--text)] text-[70px]  items-center leading-18 font-bold  '><span>Approach</span> <span>and</span> <br /><span>philosophy</span></h1>
        <div className='flex flex-col  text-gray-600 justify-self-auto  text-[20px] leading-6 gap-1'>
            <span>Design</span>
            <span>Development</span>
            <span>Mastership</span>
        </div>
        <button className='border-2 px-6 py-1 cursor-pointer text-3xl flex group items-center gap-4 font-bold rounded-full font-[font1]'>Let's Chat <span><ArrowUpRight className='size-16  stroke-1 stroke-olive-500 group-hover:stroke-yellow-500 transition '/></span></button>


      </div>
  <span className="approach-line -bottom-2 border-b-2 border-black"></span>

  {/* box2 */}
      <div className='approach-item grid items-center  grid-cols-[1fr_2fr] h-[5rem]  '>
        <img className='approach-img h-[70px] w-[70px]' src={heroImg} alt="" srcset="" />
        <div className='approach-text flex gap-16 font-[font1]'>
            <h3 className='text-3xl text-nowrap font-bold'>Faster Delivery</h3>
            <p className='text-xl max-w-[40rem] leading-9'>Accelerate your launch timelines with our dedicated and
agile remote teams ready to build and scale.</p>
        </div>
         </div>
  <span className="border-b-2 h-10 border-black"></span>
     
     {/* box3 */}

      <div className='approach-item grid items-center  grid-cols-[1fr_2fr] h-[5rem]  '>
        <img className='approach-img h-[70px] w-[70px]' src={heroImg} alt="" srcset="" />
        <div className='approach-text flex gap-13 font-[font1]'>
            <h3 className='text-3xl text-nowrap font-bold'>Client Retention</h3>
            <p className='text-xl max-w-[40rem] leading-9'>Delivering quality software builds lasting trust and
long-term partnerships with clients worldwide.</p>
        </div>
         </div>
  <span className="border-b-2 h-10 border-black"></span>
      <div className='approach-item grid items-center  grid-cols-[1fr_2fr] h-[5rem]  '>
        <img className='approach-img h-[70px] w-[70px]' src={heroImg} alt="" srcset="" />
        <div className='approach-text flex gap-16 font-[font1]'>
            <h3 className='text-3xl  font-bold'>Process Transparency</h3>
            <p className='text-xl max-w-[40rem] leading-9'>Stay updated at every stage of your project with our
structured workflow and real-time communication.</p>
        </div>
         </div>
  <span className="border-b-2 h-10 border-black"></span>

           
</div>
    </section>
  )
}

export default Approach
