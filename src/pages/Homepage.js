import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <Hero />
        <div className='container mx-auto'>
            <div className='flex justify-center items-center min-h-[70vh]'>
                <span>Homepage</span>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage