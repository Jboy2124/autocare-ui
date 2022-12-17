import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/slices/auth-slice'

const Profile = (props) => {
  const ref = useRef(null)
  const { onClickOutside } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const myProfile = useSelector(state => state.storeProfile.value)


  useEffect(() => {
    const handleClickOutside = (event) => {
      if(ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside()
      }
    }

    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }

  }, [onClickOutside])


  if(!props.show) return null

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(actions.LoginAuth(false))
  }

  const handleUploads = (e) => {
    e.preventDefault()
    setTimeout(() => {
      navigate('/uploads')
    }, 300);
  }

  return (
    <div ref={ref} className='bg-[#DEECFF] rounded-2xl w-[300px] h-[450px] shadow-2xl hover:cursor-default'>
        <div className='w-full h-[150px] rounded-t-2xl flex justify-center items-center'>
            <div className='relative w-[120px] h-[120px] rounded-full bg-white ring-2 ring-gray-300'>
                <div className='absolute top-20 right-0 text-[32px] text-gray-500 hover:cursor-pointer'><ion-icon name="camera"></ion-icon></div>
            </div>
        </div>
        <div className='flex justify-center items-center text-[16px] text-gray-500 font-poppins font-semibold'>{myProfile.firstname} { myProfile.lastname }</div>
        <div className='text-center text-[13px] text-gray-500 font-poppins italic'>{myProfile.email}</div>
       <div className='my-6'>
          <ul className='flex flex-col items-center'>
            <li className='w-full h-[50px] flex justify-start items-center text-[16px] cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 transition-all duration-300'>
              <div className='flex justify-center items-center space-x-2 px-20'>
                <span className='text-[35px] flex items-center'><ion-icon name="person-circle-outline"></ion-icon></span>
                <span>Account</span>
              </div>
            </li>
            <li className='w-full h-[50px] flex justify-start items-center text-[16px] cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 transition-all duration-300'
              onClick={(e) => handleUploads(e)}
            >
              <div className='flex justify-center items-center space-x-2 px-20'>
                <span className='text-[35px] flex items-center'><ion-icon name="cloud-upload-outline"></ion-icon></span>
                <span>Uploads</span>
              </div>
            </li>
            <li className='w-full h-[50px] flex justify-start items-center text-[16px] cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 transition-all duration-300'>
              <div className='flex justify-center items-center space-x-2 px-20'>
                <span className='text-[37px] flex items-center'><ion-icon name="help-circle-outline"></ion-icon></span>
                <span>Help</span>
              </div>
            </li>
            <li className='w-full h-[50px] flex justify-start items-center text-[16px] cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 transition-all duration-300'
              onClick={(e) => { handleLogout(e) }}
            >
              <div className='flex justify-center items-center space-x-2 px-20'>
                <span className='text-[37px] flex items-center'><ion-icon name="log-out-outline"></ion-icon></span>
                <span>Logout</span>
              </div>
            </li>
          </ul>
       </div>
    </div>
  )
}

export default Profile