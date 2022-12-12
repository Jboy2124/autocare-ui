import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../utilities/axios-utils'

const Login = () => {
    const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm()
    const navigate = useNavigate()

    const handleSubmitLogin = async (data, e) => {
        e.preventDefault()

        await api({
            method: 'POST',
            url: '/login',
            data: data
        })
        .then(response => {
            if(response.data.response === 'Success') {
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            }
        })
        .catch(err => {
            throw err
        })
    }

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

  return (
    <div className='bg-white'>
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='rounded-2xl w-[400px] h-[450px] bg-gradient-to-r from-primary to-[#2E94B9] shadow-2xl'>
                    <form onSubmit={handleSubmit((data, e) => { handleSubmitLogin(data, e) })}>
                        <div className='w-full h-50px flex items-center px-3 py-2'>
                            <span className='text-[22px] text-[#6EB6FF] font-righteous'>AUTO</span>
                            <span className='text-[22px] text-[#E0FCFF] font-righteous'>TRADER</span>
                        </div>
                        <div className='w-full h-[35px] text-[20px] text-white font-poppins text-center py-5'>Login</div>
                        <div className='w-full h-[35px] text-[14px] text-white font-poppins text-center py-2'>Input your valid credentials</div>
                        <div className='px-12 w-full flex flex-col items-center'>
                            <div className='w-full h-[33px] bg-gray-100 flex justify-between items-center mt-10 my-3'>
                                <div className='flex items-center text-[23px] text-gray-400 px-1'><ion-icon name="mail-outline"></ion-icon></div>
                                <input type='email' {...register('email', { required: 'This field is required!' })} placeholder='Email Address' className='w-full h-full py-2 outline-none text-[15px] text-gray-600 font-poppins flex items-center px-2' />
                            </div>
                            <div className='w-full h-[33px] bg-gray-100 flex justify-between items-center mb-2'>
                                <div className='flex items-center text-[23px] text-gray-400 px-1'><ion-icon name="lock-open-outline"></ion-icon></div>
                                <input type='password' {...register('password', { required: 'This field is requried!' })} placeholder='Password' className='w-full h-full py-2 outline-none text-[15px] text-gray-600 font-poppins flex items-center px-2' />
                            </div>
                            <div className='w-full flex items-center'>
                                <input type='checkbox' {...register('chkRemember')} />
                                <label className='px-2 text-[14px] text-white font-poppins'>Remember password</label>
                            </div>
                            <div className='w-full flex justify-center items-center pt-12'>
                                <button type="submit" className='px-12 py-2 bg-btnPrimary hover:bg-btnSecondary duration-300 text-[15px] text-white font-poppins rounded mb-2'>Submit</button>
                            </div>
                            <div className='text-[13px] text-white hover:text-orange-400 hover:underline underline-offset-2 duration-300 cursor-pointer font-poppins'>Forgot Password?</div>
                            <div className='text-[13px] text-white font-poppins'>Navigate back to <span className='hover:text-orange-400 hover:underline underline-offset-2 duration-300'><Link to='/'>Homepage</Link></span></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login