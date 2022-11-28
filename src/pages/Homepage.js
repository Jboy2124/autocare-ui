import React from 'react'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='flex justify-center items-center min-h-screen'>
                <span>Homepage</span>
            </div>
        </div>
    </div>
  )
}

export default Homepage