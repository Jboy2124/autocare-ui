import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { styles } from '../styles/all-styles'
import CarCard from '../cards/CarCard'
import Footer from '../components/Footer'
import { api } from '../utilities/axios-utils'

const CarList = () => {
    const [list, setList] = useState([])

    const getList = async(signal) => {
        const result = await api({
            method: 'GET',
            url: '/cars',
            signal: signal
        })
        .then(response => {
            setList(response.data[1].result)
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('Aborted')
            } else {
                return err
            }
        })
        return result
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const res = getList(signal)

        return () => {
            if(res) return controller.abort();
        }
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
        <Footer />
    </div>
  )
}

export default CarList