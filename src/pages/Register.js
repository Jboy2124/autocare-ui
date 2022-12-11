import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import { format } from 'date-fns'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'


const Register = () => {
    const { register, handleSubmit } = useForm();

    const dataArray = useSelector((state) => state.loginCreds.value)
    // const currentDate = format(new Date(Date.now()), 'MMMM dd, yyyy')

  return (
    <div className='bg-white'>
        <Navbar />
        <div className='relative min-h-screen'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center'>
                    <div className='rounded-2xl w-2/4 mobile:w-full tablet:w-3/4 h-screen my-20 shadow-xl ring-4 ring-white bg-[#DEECFF] z-10'>
                        <form onSubmit={handleSubmit(data => console.log(data))}>
                            <div className='text-[25px] text-gray-600 font-poppins text-center py-9'>Basic Information</div>
                            <div className='px-20 w-full flex flex-col items-center space-y-3'>
                                <div className='flex justify-start items-center w-full text-[16px] text-gray-600 font-poppins'>Login Information</div>
                                    <div className='flex justify-evenly items-center w-full space-x-5'>
                                        <input type='text' {...register("fname", { value: dataArray.fName } )} placeholder='Firstname' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                        <input type='text' {...register("lname", { value: dataArray.lName })} placeholder='Lastname' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                    </div>
                                    <input type='email' {...register('email', { value: dataArray.emailAdd })} placeholder='Email Address' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                    <div className='flex justify-evenly items-center w-full space-x-5'>
                                        <input type='password' {...register("password", { value: dataArray.passWord })} placeholder='Password' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                        <input type='password' {...register("confirmPassword", { value: dataArray.confirmPass })} placeholder='Confirm Password' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                    </div>

                                <div className='flex justify-start items-center w-full text-[16px] text-gray-600 font-poppins pt-6'>Company Information</div>
                                    <input type='text' {...register('company', { required: 'This field is required!' })} placeholder='Company Name' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                    <div className='flex justify-evenly items-center space-x-5 w-full'>
                                        <input type='text' {...register('tin')} placeholder='TIN' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                        <input type='text' {...register('regNo')} placeholder='Registration No.' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                    </div>
                                    <input type='text' {...register('description')} placeholder='Description' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />

                                <div className='flex justify-start items-center w-full text-[16px] text-gray-600 font-poppins pt-6'>Address/Location</div>
                                    <input type='text' {...register('address')} placeholder='Door#/St./Floor/Address' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                    <div className='flex items-center justify-evenly space-x-5'>
                                        <input type='text' {...register("brgy")} placeholder='Barangay' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                        <input type='text' {...register("city")} placeholder='Municipality/City' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                        <input type='text' {...register("zip")} placeholder='Zip Code' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                    </div>
                                    <input type='text' {...register('province')} placeholder='Province' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                    <input type='text' {...register('landmark')} placeholder='Nearest Landmark' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />

                                <div className='flex justify-start items-center w-full text-[16px] text-gray-600 font-poppins pt-6'>Contact Details</div>
                                    <input type='text' {...register('contactPerson')} placeholder='Contact Person' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                    <div className='flex justify-evenly items-center w-full space-x-5'>
                                        <input type='text' {...register("mobileNo")} placeholder='Mobile No.' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                        <input type='text' {...register("telNo")} placeholder='Landline No.' className='text-[15px] text-gray-600 font-poppins outline-none py-[5px] px-2 w-full' />
                                    </div>
                            </div>
                            <div className='w-full h-[30px] flex justify-center items-center mt-12'>
                                <button type='submit' className='bg-btnPrimary hover:bg-btnSecondary duration-300 px-20 py-2 text[16px] text-white font-poppins text-center rounded'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B2C8DF" fillOpacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg>
        </div>
        <Footer />
    </div>
  )
}

export default Register