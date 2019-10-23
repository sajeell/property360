import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-bootstrap'
import sndSlide from '../static/pakistan_monument_museum_islamabad-wallpaper-1920x1080.jpg'
import '../static/CompStyle.css'
const Carouse = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lonelyplanetimages.imgix.net/a/g/hi/t/0f58350048b1b544393b5651242e7eb5-shah-faisal-mosque.jpg?fit=crop&w=960&h=416"
            alt="First slide"
            height="300px"
          />
          <Carousel.Caption>
            <h3 className="carousel-text">Property360</h3>
            <p className="carousel-text">We Sell Apartments, Houses, Plots & Shops</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sndSlide} alt="Second slide" height="300px" />

          <Carousel.Caption>
            <h3 className="carousel-text">Property360</h3>
            <p className="carousel-text">We Rent Apartments, Houses, & Shops</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lonelyplanetimages.imgix.net/a/g/hi/t/0f58350048b1b544393b5651242e7eb5-shah-faisal-mosque.jpg?fit=crop&w=960&h=416"
            alt="Third slide"
            height="300px"
          />

          <Carousel.Caption>
            <h3 className="carousel-text">Property360</h3>
            <p className="carousel-text">Pioneer in Real Estate</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default Carouse
