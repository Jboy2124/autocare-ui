import React from 'react'

const Button = ({ name }) => {
  return (
    <div className='w-[150px] h-[38px] rounded border border-btnPrimary bg-gradient-to-br from-btnSecondary to-btnPrimary cursor-pointer'>
        <div className='flex justify-center items-center h-full w-full'>
            <div className='text-[16px] text-white font-poppins'>{name}</div>
        </div>
    </div>
  )
}

export default Button