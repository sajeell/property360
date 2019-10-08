import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import VR from './components/VR.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Carouse from './components/Carousel.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import LBottom from './components/Landing Bottom.jsx'
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <p></p>
      <Carouse />
      <p></p>
      <p className="middle-text ">We Rent & Sell Everything! ...</p>
      <VR />
      <LBottom />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
