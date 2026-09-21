import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import industry1 from "../../images/download (13).jpg"
import industry2 from "../../images/download (14).jpg"
import industry3 from "../../images/Tecnologias de Segurança no Toyota Corolla_ Inovação e Proteção em Cada Trajeto.jpg"
import industry4 from "../../images/download (15).jpg"
import industry5 from "../../images/Estratégias de Investimento em Tempos de Alta do Dólar_ O Que Você Precisa Saber.jpg"
import industry6 from "../../images/Why Health Insurance is No Longer Optional for___.jpg"
import industry7 from "../../images/Student Career Guidance Concept Art.jpg"
import industry8 from "../../images/download (16).jpg"

const industries = [

        {
            name: "Financial Services",
            image: industry1,
        },
        {
            name:  "Advanced Manufacturing",
            image: industry2,
        },
        {
            name: "Automotive & Mobility",
            image: industry3,
        },

        {
            name: "Energy & Natural Resources",
            image: industry4,
        },

        {
            name: "Banking & Capital Markets",
            image: industry5,
        },

        {
            name: "Health Care & Life Insurance",
            image: industry6,
        },
        {
            name: "Social & Public Sectors",
            image: industry7,
        },
        {
            name:  "Digital Media & Entertainment",
            image: industry8,
        }


]


const Carausel2 = () => {

     const secondRow = industries.slice(4, 8)

  useLayoutEffect(() => {
        const track = document.querySelector(".moveRight")
        const distance = track.scrollWidth / 2

     const animation =   gsap.fromTo(track, {
  x: -distance,},{
    x:0,
  duration: 15,
  ease: "none",
  repeat: -1,
})

    let timeout

    const handleScroll = () => {
        animation.timeScale(3)
        clearTimeout(timeout)

        timeout = setTimeout(() => {
            animation.timeScale(1)
        }, 150)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
        clearTimeout(timeout)
        animation.kill()
    }

     },[])

  return (
     <div className='overflow-hidden'>
            <div className='moveRight flex w-max gap-10'>

                {secondRow.map((industry, index) => (
                    <div 
                     key={index}
                        className=' h-[400px] rounded-2xl overflow-hidden w-[380px] grid grid-rows-[2.5fr_1fr] items-center'
>                     <div className='w-full'>
                    <img className='h-[300px]  w-full object-cover ' src={industry.image} alt={industry.name} srcset="" />
</div>  
                   <div className='w-full h-full items-center flex justify-center '>
                     <span className='font-[font1] text-3xl text-gray-600 text-nowrap font-light font-serif   '>
                        {industry.name}
                    </span>
                   </div>
                       
                    </div>
                ))}
                {secondRow.map((industry, index) => (
                    <div 
                     key={index}
                        className=' h-[400px] rounded-2xl overflow-hidden w-[380px] grid grid-rows-[2.5fr_1fr] items-center'
>                     <div className='w-full'>
                    <img className='h-[300px]  w-full object-cover ' src={industry.image} alt={industry.name} srcset="" />
</div>  
                   <div className='w-full h-full items-center flex justify-center '>
                     <span className='font-[font1] text-3xl text-gray-600  text-nowrap font-light font-serif   '>
                        {industry.name}
                    </span>
                   </div>
                       
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Carausel2
