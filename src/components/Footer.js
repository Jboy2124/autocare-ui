import React from 'react'
import { menu } from '../constants/menu-const'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='relative bg-[#B2C8DF]'>
        <div className='container mx-auto'>
            <div className='min-h-[35vh]'>
                <div className='flex mobile:flex-col tablet:flex-col justify-evenly items-start py-16'>
                    <div className='w-full flex justify-center'>
                        <div className='w-full'>
                            <div className='text-[25px] text-gray-700 font-poppins text-center'>Newsletter</div>
                            <div className='text-[14px] text-gray-700 font-poppins text-center'>Get the latest updates on new posted products and upcoming sales!</div>
                            <div className='flex justify-center items-center py-6'>
                                <div className='w-3/4 h-[40px] flex items-center rounded-l'>
                                    <input type='email' placeholder='Email address here' className='bg-white rounded-l w-full h-full outline-none text-[14px] text-gray-600 font-poppins px-2'/>
                                    <div className='w-[150px] h-full rounded-r bg-btnPrimary hover:bg-btnSecondary cursor-pointer duration-300 flex justify-center items-center'>
                                        <div className='text-[15px] text-white font-poppins'>Subscribe</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='text-center text-[25px] text-gray-700 font-poppins pb-3'>Customer Services</div>
                        <div className='w-full flex justify-evenly'>
                            <ul>
                                {
                                    menu.map(items => {
                                        return(
                                            <li key={items.id} className='text-[15px] text-gray-700 font-poppins space-y-2 hover:underline underline-offset-2'><Link to={items.link}>{items.name}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className='text-[15px] text-gray-700 font-poppins'>
                                <li className='space-y-2 cursor-pointer hover:underline underline-offset-2'>Terms of Use</li>
                                <li className='space-y-2 cursor-pointer hover:underline underline-offset-2'>Privacy Policy</li>
                                <li className='space-y-2 cursor-pointer hover:underline underline-offset-2'>Cookies Policy</li>
                                <li className='space-y-2 cursor-pointer hover:underline underline-offset-2'>Support</li>
                                <li className='space-y-2 cursor-pointer hover:underline underline-offset-2'>Careers</li>
                                <li className='space-y-2 cursor-pointer hover:underline underline-offset-2'>FAQs</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center'>
                        <span className='text-[25px] text-gray-700 font-poppins text-center pb-3'>Follow Us</span>
                        <div className='flex justify-center items-center space-x-3'>
                            <div className='text-[30px] text-gray-700 cursor-pointer hover:text-blue-700 duration-300'><ion-icon name="logo-facebook"></ion-icon></div>
                            <div className='text-[30px] text-gray-700 cursor-pointer hover:text-[#C13584] duration-300'><ion-icon name="logo-instagram"></ion-icon></div>
                            <div className='text-[30px] text-gray-700 cursor-pointer hover:text-blue-500 duration-300'><ion-icon name="logo-twitter"></ion-icon></div>
                            <div className='text-[30px] text-gray-700 cursor-pointer hover:text-[#FF0000] duration-300'><ion-icon name="logo-youtube"></ion-icon></div>
                            {/* <div className='text-[30px] text-gray-700 cursor-pointer hover:text-[#000000] duration-300'><ion-icon name="logo-tiktok"></ion-icon></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute bottom-0 w-full h-[35px] bg-[#B2C8DF]'>
            <div className='flex justify-center items-center h-full'>
                <span className='text-[13px] font-poppins'>&copy; 2022 - Autotrader. All rights reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer