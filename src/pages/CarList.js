import React, { useEffect, useState } from 'react'
// import Filters from '../components/Filters'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { styles } from '../styles/all-styles'
import CarCard from '../cards/CarCard'
import axios from 'axios'

const CarList = () => {
    const [list, setList] = useState([])

    

    const getList = async() => {
        await axios({
        method: 'GET',
        url: 'http://localhost:8000/cars'
       })
       .then (response => {
            setList(response.data[1].result)
            console.log(response.data[1].result)
       })
    }


    useEffect(() => {
        getList()
    }, [])

  return (
    <div className='bg-white'>
        <Navbar />
        <Searchbar />
        <div className='container mx-auto'>
            <div className={`${styles.flexCenter} min-h-screen`}>
                <div className='grid place-items-center gap-5 mobile:grid-cols1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4'>
                    {list.map(items => {
                        return(
                            <div key={items.id}>
                                <CarCard 
                                    brand={items.brand}
                                    make={items.make}
                                />
                            </div>
                           
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarList