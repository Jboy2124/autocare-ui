import React from 'react'

const Footer = () => {
  return (
    <div className='relative bg-[#E0FCFF]'>
        <div className='container mx-auto'>
            <div className='min-h-[40vh]'>
                Footer
            </div>
        </div>
        <div className='absolute bottom-0 w-full h-[35px] bg-[#E0FCFF]'>
            <div className='text-center'>
                <span className='text-[13px] font-poppins'>All rights reseved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer