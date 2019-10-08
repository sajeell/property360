import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import VR from './components/VR.jsx'
import LBottom from './components/Landing Bottom.jsx';
import Footer from './components/Footer.jsx';
import Carouse from './components/Carousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="app-wrapper">
      <Carouse />
      <Header />
      <VR />
      <LBottom />
      <Footer />
    </div>
  )
}

export default App;
