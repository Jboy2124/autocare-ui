import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { styles } from '../styles/all-styles'

const AboutUs = () => {
  return (
    <main className='bg-white'>
        <Navbar />
        <section className='container mx-auto'>
            <div className={`${ styles.flexCenter } min-h-screen`}>
                <span>About Us</span>
            </div>
        </section>
        <Footer />
    </main>
  )
}

export default AboutUs