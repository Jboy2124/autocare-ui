import React from 'react'
import { styles } from '../styles/navbar-style'
import { menu } from '../constants/menu-const'

const Navbar = () => {
  return (
    <div className='bg-blue-500'>
        <div className='container mx-auto'>
            <div className={`w-full h-[80px] ${styles.flexBetween}`}>
                <div className={`${styles.flexStart} text-white`}>
                  <div className='font-poppins'>Logo</div>
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
                <div>Secondary Menu</div>
            </div>
            <div className='hidden'>Mobile Menu</div>
        </div>
    </div>
  )
}

export default Navbar