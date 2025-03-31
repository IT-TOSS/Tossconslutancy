import { useState } from 'react'
import './App.css'
import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import HomePage from './Component/HomePage'
import Home from './Pages/Home'
import { Routes, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUs'
import JoinNewsletter2 from './Component/JoinNewsletter2'
import Services from './Pages/services'
import Contact from './Pages/ContactUs'
import Product from './Pages/product'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
    <JoinNewsletter2/>
    <Footer/>
    </>

    
  )
}

export default App
