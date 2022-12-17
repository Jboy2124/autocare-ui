import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-scroll'
import { useSelector } from 'react-redux'

const LoginComponent = () => {
    const navigate = useNavigate()
    const selector = useSelector(state => state.carCompare.value)

    const handleLogin = (e) => {
        e.preventDefault()
        setTimeout(() => {
            navigate('/login')
        }, 200);
    }

    const handleCarCompare = (e) => {
        e.preventDefault()
        setTimeout(() => {
            navigate('/car-compare')
        }, 300);
    }
  return (
    <div className='flex justify-evenly items-center w-full h-full space-x-1'>
        <div className='relative w-full px-4 cursor-pointer'>
            <div className='w-full text-[16px] text-white font-poppins' onClick={(e) => handleCarCompare(e)}>Compare</div>
            <div className={`absolute top-[-5px] right-2 ${(selector > 0) ? 'block' : 'hidden'}`}>
                <div className='rounded-full w-[15px] h-[16px] bg-rose-600 text-[11px] text-white flex justify-center items-center py-2 px-2'>{selector}</div>
            </div>
        </div>
        <div className='w-full'>
            <button type='button' className='w-[170px] py-2 rounded-full bg-btnPrimary hover:bg-btnSecondary duration-300 text-[16px] text-white font-poppins' onClick={(e) => handleLogin(e) }>
                Login
            </button>
        </div>
    </div>
  )
}

export default LoginComponent