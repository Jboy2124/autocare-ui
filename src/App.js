import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingPage from './pages/LoadingPage'
const MultiStep = require('react-multistep')

const AboutUs = lazy(() => import('./pages/AboutUs'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const Homepage = lazy(() => import('./pages/Homepage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const CarList = lazy(() => import('./pages/CarList'))
const CarCompare = lazy(() => import('./pages/CarCompare'))
const CarGuide = lazy(() => import('./pages/CarGuide'))
const Register = lazy(() => import('./pages/Register'))

const App = () => {
  return (
    <Router>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
              <Route exact path='/' element={<Homepage />}></Route>
              <Route path='/car-list' element={<CarList />} ></Route>
              <Route path='/car-guide' element={<CarGuide />}></Route>
              <Route path='/about-us' element={<AboutUs />}></Route>
              <Route path='/contact-us' element={<ContactUs />}></Route>
              <Route path='/car-compare' element={<CarCompare />}></Route>
              <Route path='/registration' element={<Register />}></Route>
              <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </Suspense>
    </Router>
  )
}

export default App