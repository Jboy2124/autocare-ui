import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const handleNavigate = (e) => {
    e.preventDefault()
    setTimeout(() => {
      navigate('/')
    }, 500)
  }

  return (
    <div className='bg-[url("./assets/notFound.svg")] bg-center bg-no-repeat bg-cover'>
        <div className='relative min-h-screen'>
          <div className={`min-h-screen flex flex-col justify-center items-center`}>
              {/* <span className='text-[40px] text-gray-600 font-bold'>Page Not Found!</span> */}
              <div className='text-[70px] text-gray-600 font-poppins font-semibold text-center'>404</div>
              <div className='text-[40px] text-gray-600 font-poppins text-center'>Page not Found!</div>
              <div className='text-[16px] text-gray-600 font-poppins text-center mt-5'>Navigate to <span className='cursor-pointer font-semibold hover:underline underline-offset-4 duration-300 text-blue-600' onClick={(e) => handleNavigate(e)}>Homepage</span>.</div>
          </div>
        </div>
        {/* <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B2C8DF" fillOpacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg> */}
    </div>
  )
}

export default NotFound