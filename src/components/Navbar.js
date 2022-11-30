import React from 'react'
import { styles } from '../styles/navbar-style'
import { menu } from '../constants/menu-const'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='bg-primary'>
        <div className='container mx-auto'>
            <div className={`w-full h-[80px] ${styles.flexBetween}`}>
                <div className={`${styles.flexStart} text-white`}>
                  <div className={`${styles.flexCenter} space-x-1`}>
                    <div className='font-monte'>
                        <span className='text-[38px]  text-[#C6CBEF]'>auto</span>
                        <span className='text-[38px]  text-[#E3E7F1]'>trader</span>
                      </div>
                  </div>
                  <div>
                    <ul className={`${styles.flexCenter} space-x-4 font-poppins text-[16px]`}>
                      {menu.map(items => {
                        return(
                          <li key={items.id}>{items.name}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className={`${styles.flexCenter} space-x-4`}>
                  <Button name='Signup'/>
                  <Button name='Login'/>
                </div>
            </div>
            <div className='hidden'>Mobile Menu</div>
        </div>
    </div>
  )
}

export default Navbar