import React from 'react'
import { styles } from '../styles/all-styles'

const LoadingPage = () => {
  return (
    <div className='bg-white'>
        <div className='contaier mx-auto'>
            <div className={`${ styles.flexCenter } min-h-screen`}>
                <span>Loading Page...</span>
            </div>
        </div>
    </div>
  )
}

export default LoadingPage