import React from 'react'

const CarBrandCard = ({name, logo}) => {
  return (
    <div className='rounded w-[150px] h-[100px] hover:bg-gray-300 duration-300 hover:shadow-lg'>
        <div className='w-full h-[180px] overflow-hidden'>
            <img src={logo} alt='Car Brands' className='object-center object-contain w-[150px] h-[100px]' />
        </div>
    </div>
  )
}

export default CarBrandCard