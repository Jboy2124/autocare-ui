import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import Account from '../components/steps/Account'
import Complete from '../components/steps/Complete'
import Details from '../components/steps/Details'

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1)
 
    const steps = [
        'Account Information',
        'Personal Details',
        'Complete'
    ]

    const displaySteps = (step) => {
        switch(step) {
            case 1:
                return <Account />
            case 2: 
                return <Details />
            case 3:
                return <Complete />
            default:
        }
    }


    const handleClick = (direction) => {

    }

  return (
    <div className='bg-gray-400'>
        <Navbar />
        <div className='container mx-auto'>
            <div className='min-h-screen flex flex-col'>
                <div className='text-center'>Registration</div>
                <Stepper 
                    steps={steps}
                    currentStep={currentStep}
                />
                <StepperControl 
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Register