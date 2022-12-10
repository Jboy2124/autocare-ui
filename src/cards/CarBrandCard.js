import React from 'react'

const CarBrandCard = ({name, logo}) => {
  return (
    <div className='rounded-xl w-[160px] h-[110px] hover:bg-[#AAC4FF] duration-500 hover:shadow-lg p-2'>
        <div className='w-full h-[180px] overflow-hidden'>
            <img src={logo} alt='Car Brands' className='object-center object-contain w-[150px] h-[100px]' />
        </div>
    </div>
  )
}

export default CarBrandCard