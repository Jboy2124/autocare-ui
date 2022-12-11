import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto w-full h-[60px] flex justify-center items-center'>
            <div className='flex justify-around w-full space-x-5'>
                {/* prev button  */}
                  <button onClick={() => handleClick()} type="button" className={`bg-green-500 rounded text-[16px] text-white font-poppins px-10 py-2 ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>Prev</button>

                {/* next button  */}
                  <button onClick={() => handleClick('next')} type='button' className={`bg-green-500 rounded text-[16px] text-white font-poppins px-10 py-2`}>
                    { currentStep === steps.length - 1 ? "Confirm" : "Next" }
                  </button>
            </div>
        </div>
    </div>
  )
}

export default StepperControl