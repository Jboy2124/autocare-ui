import React from 'react'

const Searchbar = () => {
  return (
    <div className='bg-gray-100 py-2'>
        <div className='flex justify-center items-center w-full h-[60px]'>
            <div className='bg-white border border-gray-300 rounded-full w-[500px] h-[40px] flex justify-center items-center px-[8px]'>
                <div className='text-[22px] text-gray-400 flex justify-center items-center'>
                  <ion-icon name="search-outline"></ion-icon>
                </div>
                <input type='text' placeholder='Search' className='px-2 outline-none text-[15px] text-gray-400 font-poppins w-full' />
                <div className='text-[20px] text-gray-400 flex justify-center items-center px-[6px] py-[6px] cursor-pointer rounded-full hover:bg-gray-100 hover:text-gray-400 duration-300'>
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchbar