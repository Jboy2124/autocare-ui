import React, { useState } from 'react'
import { styles } from '../styles/all-styles'
import { menu } from '../constants/menu-const'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true)
  const navigate = useNavigate()

  return (
    <div className='relative bg-gradient-to-r from-primary to-[#2E94B9]'>
        {/* <div className='container mx-auto flex justify-center items-center'>
          <div className='absolute bg-gray-300 bottom-[-200px] w-[600px] h-[0px] hover:h-[200px] rounded-bl duration-500 top-20 cursor-pointer'>
              <div className='before:absolute before:bottom-[-30px] before:right-0 before:h-[30px] before:w-[80px] before:bg-gray-300 before:rounded-b'>
              </div>
          </div>
        </div> */}


        <div className='container mx-auto'>
            <div className={`w-full h-[80px] ${styles.flexBetween}`}>
                <div className={`${styles.flexStart} text-[#E0FCFF] space-x-12`}>
                  <div className='flex justify-center items-center'>
                    <div className='font-righteous'>
                        <Link to='/' className='cursor-default'>
                          <span className='text-[35px] text-[#6EB6FF]'>AUTO</span>
                          <span className='text-[35px] text-[#E0FCFF]'>TRADER</span>
                        </Link>
                      </div>
                  </div>
                  <div className={`${styles.laptopDesktopOnly}`}>
                    <ul className={`${styles.flexCenter} space-x-4 font-poppins text-[16px]`}>
                      {menu.map(items => {
                        return(
                          <li key={items.id} className='cursor-pointer hover:text-[#6EB6FF] duration-300'>
                            <Link to={items.link}>{items.name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className={`hidden tablet:hidden laptopsm:hidden laptop:flex desktop:flex justify-evenly items-center space-x-7`}>
                  <div className='cursor-pointer'>
                    <Link to='/car-compare'><span className='text-[16px] text-white text-center font-poppins'>Compare</span></Link>
                  </div>
                  <div className='bg-btnPrimary hover:bg-btnSecondary px-14 py-2 rounded cursor-pointer duration-300' onClick={() => navigate('/login')}>
                    <div className='text-[16px] text-white font-poppins'>
                        <span>Login</span>
                    </div>
                  </div>
                  <div >

                  </div>
                </div>
                
                <div className='hidden mobile:block tablet:block laptopsm:block'>
                      <div className='text-[27px] text-gray-100 flex justify-center items-center font-poppins cursor-pointer p-[6px] rounded-full hover:bg-[#6EB6FF] duration-300' onClick={() => { setShowMenu(value => !value) }}>
                        { (showMenu) ? <ion-icon name="menu-outline"></ion-icon> : <ion-icon name="close-outline"></ion-icon> }
                      </div>
                </div>
            </div>
        </div>
          <div className='hidden mobile:block tablet:block laptopsm:block'>
                <div className={`${ (showMenu) ? 'hidden' : 'block' } bg-gradient-to-r from-primary to-[#2E94B9] w-full z-50`}>
                      <div className='flex laptopsm:hidden justify-center items-center pb-2'>
                          <ul className='text-center space-y-1 text-[16px] w-full'>
                            {menu.map(items => {
                              return(
                                <li key={items.id} className='text-[16px] text-gray-100 font-poppins h-[35px] cursor-pointer rounded-full flex justify-center items-center hover:bg-[#E0FCFF] hover:text-primary duration-500'>
                                  <Link to={items.link}>{items.name}</Link>
                                </li>
                              )
                            })}
                          </ul>
                      </div>
                      <div className='mobile:flex tablet:flex laptopsm:flex laptop:hidden desktop:hidden justify-center items-center space-x-3 pb-4'>
                        <div className='px-12 py-2 text-[16px] text-black rounded bg-white cursor-pointer'>
                          <span className='text-[16px] font-poppins'>Compare</span>
                        </div>
                        <div className='px-10 py-2 text-[16px] text-black rounded bg-white cursor-pointer'>
                          <span className='text-[16px] font-poppins'>Get Started</span>
                        </div>
                      </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar