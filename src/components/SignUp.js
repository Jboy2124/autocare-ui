import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { api } from '../utilities/axios-utils'
import { useDispatch } from 'react-redux'
import { actions } from '../redux/slices/reg-slice'

const SignUp = () => {
    const fnameRef = useRef(null)
    const lnameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleRegistration = async (e) => {
        e.preventDefault()

        await api({
            method: 'POST',
            url: '/register',
            data: {
                fname: fnameRef.current.value,
                lname: lnameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
        })
        .then(response => {
            console.log(response.data)
            dispatch(actions.getID(response.data))
        })
       


        setTimeout(() => {
            navigate('/registration')
        }, 500)
    }

  return (
    <div className='bg-[#DEECFF]'>
        <div className='container mx-auto'>
            <div className='min-h-[70vh] flex justify-evenly items-center mobile:flex-col tablet:flex-col py-5'>
                <div className='w-full text-center'>
                    <div className='text-[48px] text-gray-600 font-poppins'>
                        Increase your visibility, accessability & sales, register at 
                        <span className='text-[50px] text-[#6EB6FF] font-righteous'> AUTOTRADER</span>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className='rounded-2xl ring-4 ring-white w-[430px] h-[500px] bg-gradient-to-r from-primary to-[#2E94B9] shadow-2xl space-y-3'>
                        <div className='flex justify-center items-center w-full h-[45px] text-[20px] my-10 text-white font-poppins'>REGISTER</div>
                        <div className='w-full h-[250px] flex flex-col justify-center px-10 space-y-4'>
                            <div className='flex justify-evenly items-center space-x-3 w-full'>
                                <input type='text' ref={fnameRef} placeholder='Firstname' className='text-[14px] font-poppins focus:ring-2 focus:ring-btnPrimary outline-none py-2 px-1 w-full' />
                                <input type='text' ref={lnameRef} placeholder='Lastname' className='text-[14px] font-poppins focus:ring-2 focus:ring-btnPrimary  outline-none py-2 px-1 w-full' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <input type='email' ref={emailRef} placeholder='example@email.com' className='text-[14px] font-poppins focus:ring-2 focus:ring-btnPrimary  outline-none py-2 px-1 w-full' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <input type='password' placeholder='Password' className='text-[14px] font-poppins focus:ring-2 focus:ring-btnPrimary  outline-none py-2 px-1 w-full' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <input type='password' ref={passwordRef} placeholder='Confirm password' className='text-[14px] font-poppins focus:ring-2 focus:ring-btnPrimary  outline-none py-2 px-1 w-full' />
                            </div>
                            <div className='flex items-center'>
                                <input type='checkbox' name='chkAccept' className='font-poppins cursor-pointer focus:ring-2 focus:ring-btnPrimary ' />
                                <label className='px-2 text-center text-[13px] text-white font-poppins'>I accept the 
                                    <a href="https://www.google.com" className='text-green-300'> Terms of Use</a> & <a href="https://www.google.com" className='text-green-300'>Privacy Policy</a>.
                                </label>
                            </div>
                        </div>
                        <div className='flex justify-center items-center pt-5'>
                            <div className='text-[15px] text-white font-poppins rounded px-10 py-2 bg-btnPrimary hover:bg-btnSecondary duration-300 cursor-pointer' onClick={(e) => handleRegistration(e)}>Create Account</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp