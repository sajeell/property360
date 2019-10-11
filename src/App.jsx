import React from 'react'
import './App.css'
// import Header from './components/Header.jsx'
// import VR from './components/VR.jsx'
// import Contact from './components/Contact.jsx'
// import Footer from './components/Footer.jsx'
// import Carouse from './components/Carousel.jsx'
// import LBottom from './components/Landing Bottom.jsx'
// import Middle from './components/Middle.jsx';
import Admin from './components/Admin/Admin.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="app-wrapper">
      {/* <Header />
      <Carouse />
      <Middle />
      <p></p>
      <h3 className="middle-text ">VR Platform </h3>
      <VR />
      <LBottom />
      <Contact />
      <Footer /> */}
      <Admin />
    </div>
  )
}
export default App
