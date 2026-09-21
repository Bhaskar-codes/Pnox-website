import React from 'react'
import HomeHero from '../HomeHero'
import HomeBottom from '../Components/home/HomeBottom'
import Introsection from '../Components/home/Introsection'
import Services from '../Components/home/Services'
import ServicesMorque from '../Components/home/ServicesMorque'
import Services2 from '../Components/home/Services2'
import Approach from '../Components/home/Approach'
import Industries from '../Components/home/Industries'
import MorphePnox from '../Components/home/MorphePnox'
import Footer from '../Footer/Footer'
import Contact from '../Components/home/Contact'

const Home = () => {
  return (
    <div className=' w-full '>
     <div className='font-[font1] text-7xl  font-bold flex flex-col items-center justify-center mt-16 leading-relaxed'>
     <HomeHero/>

    <div className="border-t-4 w-[60rem] h-2 text-gray-400 leading-relaxed border-dashed border-b-gray-400"></div>
       <HomeBottom/>
     </div>
     <Introsection/>
     <Services/>
     <ServicesMorque/>
     <Services2/>
     <Approach/>
     <Industries/>
     <MorphePnox/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Home
