import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Products from './Pages/Products';
// import Dashboard from './components/Dashbord/Dashbord';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
