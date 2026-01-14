import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Career from './pages/Career'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
