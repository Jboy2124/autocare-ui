import React from 'react'
import Img from '../assets/hero-no-bg.png'

const Hero = () => {
  return (
    <div className='relative bg-gradient-to-r from-primary to-[#2E94B9] overflow-hidden'>
       <div className='container mx-auto'>
            <div className='min-h-[60vh] flex justify-center items-center'>
                Sampleas
                sdfsdf
            </div>
       </div>
       <div className='relative z-[1000] flex justify-center items-start'>
            <img src={Img} alt='Hero Section' className='h-[300px] w-[550px]'/>
       </div>
       <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#fff" fillOpacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path></svg>
    </div> 
  )
}

export default Hero