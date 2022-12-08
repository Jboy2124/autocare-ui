import React from 'react'

const HelpChoose = () => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto'>
            <div className='min-h-[20vh]'>
                <div className='w-full h-[30vh] flex flex-col justify-center items-center'>
                    <div className='text-[40px] text-gray-600 font-poppins text-center'>Can't decide what car to choose?</div>
                    <div className='text-[18px] text-gray-600 font-poppins text-center'>Just use our <span className='font-semibold'>Car Guide</span>, everything you need to know about our cars from specifications, colors to mileage.</div>
                    <div className='flex justify-center items-center pt-5'>
                        <div className='bg-btnPrimary hover:bg-btnSecondary cursor-pointer duration-300 px-12 py-2 rounded'>
                            <div className='text-[16px] text-white font-poppins'>Car Guide</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpChoose