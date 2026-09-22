import React from 'react'
import heroImg from "../../images/03_hero-img.webp"

const HomeBottom = () => {
  return (
    <>
     <div className='mt-18  flex flex-row  w-screen  items-center'>
            <div className='mx-26'><img className='w-[220px] h-[200px] rotate' src={heroImg} alt="" /></div>
            <p className='text-xl font-normal text-gray-700 leading-relaxed max-w-[45rem]'>PNOX is a digital creative studio building websites, brands, and 
digital experiences that help businesses move forward.We bring together strategy, design, 
development, and technology to transform ideas into powerful digital experiences that strengthen brands,
 engage audiences, and create lasting business value.</p>
        </div>
      
    </>
  )
}

export default HomeBottom
