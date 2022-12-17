import React from 'react'

const FeaturedCard = (props) => {
    const { 
    image, 
    carName,
    model,
    year,
    price
     } = props
  return (
    <div className='rounded-2xl w-[300px] h-[320px] bg-gradient-to-r from-primary to-[#2E94B9] shadow-sm hover:shadow-2xl hover:scale-105 hover:shadow-gray-500 duration-300'>
        <div className='w-full rounded-t-2xl overflow-hidden'>
            <img src={image} alt='Car Avatar' className='object-cover object-center p-[1px] rounded-t-2xl' />
        </div>
        <div className='flex flex-col justify-evenly items-center pt-3'>
          <div className='text-[18px] text-white font-poppins text-center'>{carName} {model} - {year}</div>
          <div className='text-[13px] text-white font-poppins'>Php {price}</div>
          <div className='bg-btnPrimary rounded-full flex justify-center items-center mt-5 cursor-pointer'>
              <div className='px-14 py-2 text-center text-[14px] text-white font-poppins'>Full Specs</div>
          </div>
        </div>
    </div>
  )
}

export default FeaturedCard