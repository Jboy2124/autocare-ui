import React from 'react'
import CarBrandCard from '../cards/CarBrandCard'
import { brands } from '../constants/car-brands'


const CarBrands = () => {
  return (
    <div className='relative bg-white'>
        <div className='container mx-auto'>
            <div className='min-h-[70vh] flex flex-col justify-center items-center'>
                <div className='text-[40px] text-gray-600 font-poppins w-full text-center'>Car Brands</div>
                <div className='text-[20px] text-gray-600 font-poppins text-center'>We have wide-array of car brands. From Japanese to European Cars.</div>
                <div className='grid grid-cols-5 mobile:grid-cols-2 tablet:grid-cols-3 laptopsm:grid-cols-4 gap-5 mt-12'>
                    {
                        brands.map(items => {
                            return(
                                <div key={items.id} className='z-50'>
                                    <CarBrandCard 
                                        name={items.name}
                                        logo={items.logo}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DEECFF" fillOpacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg>
    </div>
  )
}

export default CarBrands