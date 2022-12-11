import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { format } from 'date-fns'
import { useSelector } from 'react-redux'


const Register = () => {
    const id = useSelector((state) => state.accountID.value)
    const currentDate = format(new Date(Date.now()), 'MMMM dd, yyyy')
 
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='relative min-h-screen'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center'>
                    <div className='text-center text-[40px] text-gray-600 font-poppins mt-10'>Registration { id }</div>
                    <div className='text-[16px] text-gray-600 font-poppins text-center'>Register your company & advertise all your product cars! Unlimited post! forever!</div>
                    <div className='rounded-2xl w-2/4 mobile:w-full tablet:w-3/4 h-screen mt-5 mb-10 shadow-xl ring-4 ring-white bg-[#DEECFF] z-10'>
                        <div className='text-end text-[15px] text-gray-600 font-poppins p-5'>
                            <label className='text-[15px] text-gray-600 font-poppins'><span className='text-[15px] text-gray-600 font-poppins font-semibold px-3'>Date: </span> {currentDate} </label>
                            <div className='w-full bg-green-200 flex justify-evenly items-center'>
                                <input type='text' />
                                <input type='text' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B2C8DF" fillOpacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg>
        </div>
        <Footer />
    </div>
  )
}

export default Register