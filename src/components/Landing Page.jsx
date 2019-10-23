import React from 'react'
import Header from './Header.jsx'
import VR from './VR.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import Carouse from './Carousel.jsx'
import LBottom from './Landing Bottom.jsx'
import Middle from './Middle.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
function Landing() {
  return (
    <div className="app-wrapper">
      <Header />
      <Carouse />
      <Middle />
      <p></p>
      <h3 className="middle-text ">VR Platform </h3>
      <VR />
      <br />
      <br />
      <Contact />
      <Footer />
    </div>
  )
}
export default Landing
