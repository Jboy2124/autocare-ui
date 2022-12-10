import React from 'react'
import HomeHero from '../assets/home-hero-final.png'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()

    const handleLoadToCarList = (e) => {
        e.preventDefault()
        setTimeout(() => {
            navigate('/car-list')
        }, 500)
    }
  return (
    <div className='relative bg-gradient-to-r from-primary to-[#2E94B9] overflow-hidden'>
       <div className='container mx-auto'>
            <div className='min-h-[75vh] flex mobile:flex-col tablet:flex-col justify-evenly items-center spa'>
                <div className='mobile:w-[300px] tablet:w-[300px] tablet:mt-10 laptopsm:w-[550px] w-[500px] h-[420px] mx-20 rounded-2xl bg-gradient-to-t from-primary to-[#2E94B9] ring-8 ring-white shadow-2xl z-50'>
                    {/* <div className='w-full h-[45px] rounded-t bg-[#D1D1D1] flex justify-center items-center'></div> */}
                    <div className='flex flex-col justify-center items-center mt-10'>
                        <p className='text-[32px] mobile:text-[25px] text-center text-white font-poppins'>Simple &</p>
                        <p className='text-[32px] mobile:text-[25px] text-center text-white font-poppins'>hassle-free way</p>
                        <p className='text-[32px] mobile:text-[25px] text-center text-white font-poppins'>to find a car.</p>
                        {/* <div className='text-[26px] mobile:text-[30px] text-center  text-white font-poppins px-5'>Let us help you find the car that you're looking for.</div> */}
                        <div className='text-[16px] text-white font-poppins text-center py-3 px-6 mt-3'>We have great cars, good prices & outstanding services.</div>
                        <div className='bg-btnPrimary hover:bg-btnSecondary duration-300 cursor-pointer rounded flex justify-center items-center px-14 py-[10px] mt-12' onClick={(e) => handleLoadToCarList(e)}>
                            <div className='text-[15px] text-white font-poppins'>Find A Car</div>
                        </div>
                    </div>
                </div>
                <div className='grid gri place-items-center space-y-5 gap-5 w-full overflow-hidden mt-10 z-50'>
                    <img src={HomeHero} alt='Home Hero' className='object-center object-cover' />
                </div>
            </div>
       </div>
       <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg>
    </div> 
  )
}

export default Hero