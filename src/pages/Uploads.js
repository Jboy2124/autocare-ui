import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Uploads = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-screen'>
                <div className='w-full h-[50px] bg-green-200'>Upload your car images here</div>
                
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Uploads