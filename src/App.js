import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Homepage />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    </Router>
  )
}

export default App