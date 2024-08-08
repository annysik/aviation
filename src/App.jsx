import React from 'react';
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar/>  
          <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1>Page Not Found</h1>}/>
          </Routes>
        </Router>
        <Footer flip="flip-up"/>
      </div>
    </>
  )
}

export default App
