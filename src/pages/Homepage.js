import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import FeaturedCard from '../cards/FeaturedCard'
import { featCars } from '../constants/featured-cars'
import SignUp from '../components/SignUp'
import HelpChoose from '../components/HelpChoose'
import CarBrands from '../components/CarBrands'

const Homepage = () => {

  return (
    <div className='bg-white'>
        <Navbar />
        <Hero />
        <SignUp />
        <div className='relative min-h-[70vh] bg-white'>
          <div className='container mx-auto flex flex-col justify-evenly items-center'>
            <div className='w-full h-[65px] flex flex-col justify-center items-center mt-20'>
                <div className='text-[40px] text-gray-600 font-poppins text-center'>Featured Cars</div>
                <div className='text-[20px] mobile:text-[16px] text-gray-600 font-poppins text-center'>Cars that's Affordable, High-Tech & Value for the money that you can buy today!</div>
            </div>
            <div className='grid mobile:grid-cols-1 tablet:grid-cols-2 laptopsm:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-6 place-items-center h-full desktop:h-[45vh] py-10'>
              {
                featCars.map(items => {
                  return(
                    <div key={items.carId} className='z-50'>
                        <FeaturedCard 
                          image={items.image}
                          carName={items.carName}
                          model={items.model}
                          year={items.year}
                          price={items.price}
                        />
                    </div>
                  )
                })
              }     
            </div>
          </div>
          <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B2C8DF" fillOpacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg>
          {/* <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,149.3C384,171,480,213,576,213.3C672,213,768,171,864,176C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        </div>
        <CarBrands />
        <HelpChoose />
        <Footer />
    </div>
  )
}

export default Homepage