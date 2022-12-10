import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import MultiStep from 'react-multistep'
import SignUp from '../components/SignUp'
const MultiStep = require ('react-multistep')


const Register = (props) => {

    const steps = [
        {
            title: 'Credentials', component: <SignUp />
        }
    ]

  return (
    <div className='bg-gray-100'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex justify-center items-center'>
                <div>Registration</div>
                <MultiStep activeStep={1} showNavigation={true} steps={steps} />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Register