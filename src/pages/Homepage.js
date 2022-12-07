import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import FeaturedCard from '../cards/FeaturedCard'
import { featCars } from '../constants/featured-cars'

const Homepage = () => {
  return (
    <div className='bg-white'>
        <Navbar />
        <Hero />
        <div className='container mx-auto'>
            <div className='min-h-[70vh]'>
                <div className='w-full h-[65px] bg-gray-300 flex items-center mt-10'>
                    <div className='text-[20px] text-gray-600 font-poppins font-semibold'>FEATURED CARS</div>
                </div>
                <div className='grid grid-cols-1 tablet:grid-cols-2 laptopsm:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-5 place-items-center'>
                    {
                      featCars.map(items => {
                        return(
                          <div key={items.carId}>
                              <FeaturedCard />
                          </div>
                        )
                      })
                    }
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage