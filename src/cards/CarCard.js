import React from 'react'

const CarCard = (props) => {
    const { brand, make } = props

  return (
    <div className='w-[250px] h-[300px] bg-gray-300 rounded hover:shadow-lg'>
        <div className='w-full h-20px bg-black flex justify-center items-center'>
            <span className='text-white'>{brand} - {make}</span>
        </div>
    </div>
  )
}

export default CarCard