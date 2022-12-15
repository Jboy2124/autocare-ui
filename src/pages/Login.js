import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../utilities/axios-utils'
import { useDispatch } from 'react-redux'
import { actions } from '../redux/slices/auth-slice'

const Login = () => {
    const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm()

    const [errorUser,setErrorUser] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const navigate = useNavigate()
    const dispath = useDispatch()


    const handleSubmitLogin = async (data, e) => {
        e.preventDefault()

        await api({
            method: 'POST',
            url: '/login',
            data: data
        })
        .then(response => {
            switch(response.data.response) {
                case 'Success':
                    dispath(actions.LoginAuth(true))
                    setTimeout(() => {
                        navigate('/')
                    }, 500)
                    break;
                case 'Invalid Password':
                    setErrorPassword(true)
                    reset()
                    break;
                case 'Invalid Username':
                    setErrorUser(true)
                    reset()
                    break;
                default:
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

    const resetError = () => {
        setErrorUser(false)
        setErrorPassword(false)
    }
  return (
    <div className='relative bg-[#DEECFF]'>
        <div className='container mx-auto'>
            <div className='min-h-screen flex mobile:flex-col tablet:flex-col space-y-5 justify-evenly items-center'>
                {/* Login Banne  */}
                <div className='w-full h-[450px] flex justify-center items-center bg-[url("./assets/blob-haikei.svg")] bg-cover bg-no-repeat bg-center overflow-visible'>
                    <div className='text-[60px] mobile:text-[40px] text-gray-600 font-poppins px-10 text-center'>"Don’t only dream about cars; make one of them yours."</div>
                </div>

                {/* Login Card  */}
                <div className='w-full z-50 flex justify-center items-center'>
                    <div className='rounded-2xl w-[400px] h-[450px] bg-gradient-to-r from-primary to-[#2E94B9] ring-4 ring-white shadow-2xl shadow-gray-600 z-50'>
                        <form onSubmit={handleSubmit((data, e) => { handleSubmitLogin(data, e) })}>
                            <div className='w-full h-50px flex items-center px-3 py-2'>
                                <span className='text-[22px] text-[#6EB6FF] font-righteous'>AUTO</span>
                                <span className='text-[22px] text-[#E0FCFF] font-righteous'>TRADER</span>
                            </div>
                            <div className='w-full h-[35px] text-[22px] text-white font-poppins text-center py-5'>Login</div>
                            <div className='w-full h-[35px] text-[12px] text-white font-poppins text-center py-3'>Input your valid credentials</div>
                            <div className='px-12 w-full flex flex-col items-center'>
                                <div className='w-full h-[35px] bg-white flex justify-between items-center mt-10 my-4 rounded'>
                                    <div className='flex items-center text-[23px] text-gray-400 px-1'><ion-icon name="mail-outline"></ion-icon></div>
                                    <input type='email' {...register('email', { required: true })} onChange={resetError} placeholder='Email Address' className='w-full h-full py-2 rounded-r outline-none text-[15px] text-gray-600 font-poppins flex items-center px-2' />
                                    <div className={`text-[22px] pr-1 text-red-600 ${ (errorUser) ? 'flex' : 'hidden' } flex justify-center items-center`}><ion-icon name="alert-circle-outline"></ion-icon></div>
                                </div>
                                <div className='w-full h-[35px] bg-gray-100 flex justify-between items-center mb-2 rounded'>
                                    <div className='flex items-center text-[23px] text-gray-400 px-1'><ion-icon name="lock-open-outline"></ion-icon></div>
                                    <input type='password' {...register('password', { required: true })} onChange={resetError} placeholder='Password' className='w-full h-full rounded-r py-2 outline-none text-[15px] text-gray-600 font-poppins flex items-center px-2' />
                                    <div className={`text-[22px] pr-1 text-red-600 ${ (errorPassword) ? 'flex' : 'hidden' } flex justify-center items-center`}><ion-icon name="alert-circle-outline"></ion-icon></div>
                                </div>
                                <div className='w-full flex items-center'>
                                    <input type='checkbox' {...register('chkRemember')} />
                                    <label className='px-2 text-[14px] text-white font-poppins'>Remember password</label>
                                </div>
                                <div className='w-full flex justify-center items-center pt-12'>
                                    <button type="submit" className='px-20 py-2 bg-btnPrimary hover:bg-btnSecondary duration-300 text-[15px] text-white font-poppins rounded mb-2'>Submit</button>
                                </div>
                                <div className='text-[13px] text-white hover:text-orange-400 hover:underline underline-offset-2 duration-300 cursor-pointer font-poppins'>Forgot Password?</div>
                                <div className='text-[13px] text-white font-poppins'>Navigate back to <span className='hover:text-orange-400 hover:underline underline-offset-2 duration-300'><Link to='/'>Homepage</Link></span></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg>
    </div>
  )
}

export default Login