import React from 'react'
import HomeHero from '../assets/home-hero-final.png'

const Hero = () => {
  return (
    <div className='relative bg-gradient-to-r from-primary to-[#2E94B9] overflow-hidden'>
       <div className='container mx-auto'>
            <div className='min-h-[65vh] flex mobile:flex-col tablet:flex-col justify-evenly items-center spa'>
                <div className='mobile:w-[300px] w-[450px] h-[400px] mx-20 rounded-md bg-gray-200 shadow-2xl z-50'>
                    <div className='w-full h-[45px] rounded-t bg-gray-300 flex justify-center items-center'></div>
                    <div className='flex flex-col justify-center items-center mt-8'>
                        <div className='text-[26px] mobile:text-[30px] text-center text-gray-600 font-poppins'>Let us find the car</div>
                        <div className='text-[26px] mobile:text-[30px] text-center  text-gray-600 font-poppins px-5'>that you're looking for.</div>
                        <div className='text-[16px] text-gray-600 font-poppins text-center py-3 px-6'>Great Prices. Great Vehicles. Great Services.</div>
                        <div className='bg-btnPrimary hover:bg-btnSecondary duration-300 cursor-pointer rounded flex justify-center items-center px-12 py-[10px] mt-10'>
                            <div className='text-[15px] text-white font-poppins'>Find A Car</div>
                        </div>
                    </div>
                </div>
                <div className='grid gri place-items-center space-y-5 gap-5 w-full overflow-hidden mt-10 z-50'>
                    <img src={HomeHero} alt='Home Hero' className='object-center object-cover' />
                </div>
            </div>
       </div>
       <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D1D1D1" fill-opacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg>
    </div> 
  )
}

export default Hero