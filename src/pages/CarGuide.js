import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const CustomerCare = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='flex justify-center items-center min-h-screen'>
                <span>Car Guide for Customers</span>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default CustomerCare