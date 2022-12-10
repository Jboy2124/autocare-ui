import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { styles } from '../styles/all-styles'

const ContactUs = () => {
  return (
    <main className='bg-white'>
        <Navbar />
        <section className='container mx-auto'>
            <div className={`${styles.flexCenter} min-h-screen`}>
                <span>Contact Us</span>
            </div>
        </section>
        <Footer />
    </main>
  )
}

export default ContactUs