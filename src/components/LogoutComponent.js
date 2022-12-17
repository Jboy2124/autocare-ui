import React, { useState } from 'react'
import Profile from './Profile'

const LogoutComponent = () => {
    const [showProfile, setShowProfile] = useState(false)

  return (
    <div className='flex justify-evenly items-center w-full h-full'>
        <div className='flex justify-evenly items-center'>
            <div className='text-[21px] text-white flex justify-center items-center cursor-pointer hover:bg-gray-300 hover:bg-opacity-30 p-2 duration-300 rounded-full'><ion-icon name="notifications-outline"></ion-icon></div>
            <div className='text-[21px] text-white flex justify-center items-center cursor-pointer hover:bg-gray-300 hover:bg-opacity-30 p-2 duration-300 rounded-full'><ion-icon name="mail-outline"></ion-icon></div>
        </div>
        <div className='relative px-4 w-full cursor-pointer' onClick={() => { setShowProfile(true) }}>
            <div className='relative'>
                <div className='text-[17px] text-white font-poppins font-bold'>My Profile</div>
            </div>
            <div className='absolute z-50 top-[35px] right-3' >
                <Profile show={showProfile} onClickOutside={() => { setShowProfile(false) }} />
            </div>
        </div>
    </div>
  )
}

export default LogoutComponent