import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

const LoadingPage = () => {

  return (
    <div className='bg-white'>
        <div className='contaier mx-auto'>
            <div className={`flex flex-col justify-center items-center min-h-screen`}>
                <PuffLoader 
                  size={100}
                  color='#494CA2'
                  loading={true}
                  speedMultiplier={2}
                />
                <span className='text-[16px] text-primary font-poppins'>Loading Page...</span>
            </div>
        </div>
    </div>
  )
}

export default LoadingPage