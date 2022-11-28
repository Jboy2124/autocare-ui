import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-200'>
        <div className='container mx-auto'>
            <div className='w-full h-[80px] flex justify-between items-center'>
                <div>Logo</div>
                <div>Primary Menu</div>
                <div>Secondary Menu</div>
            </div>
            <div className='hidden'>Mobile Menu</div>
        </div>
    </div>
  )
}

export default Navbar