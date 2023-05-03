import React, { useState } from 'react'
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../../images/carrusel.png'
export default function Carrusel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div className='carousel-main-container'>
        <Carousel className='carousel-items-container' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='carousel-item'>
              <img
                className="  carousel-img"
                src={foto1}
                alt="First slide"
              />
              <Carousel.Caption className='carousel-item-caption'>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item'>
              <img
                className="carousel-img"
                src={foto1}
                alt="Second slide"
              />

              <Carousel.Caption className='carousel-item-caption'>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item'>
              <img
                className="carousel-img"
                src={foto1} 
                alt="Third slide"
              />

              <Carousel.Caption className='carousel-item-caption'>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
    </div>
  )
}
