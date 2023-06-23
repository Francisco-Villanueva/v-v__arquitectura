import React, { useState } from 'react'
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../../images/render1.jpg'
import foto2 from '../../images/render2.jpg'
import foto3 from '../../images/render3.jpg'
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
             
            </Carousel.Item>
            <Carousel.Item className='carousel-item' autoFocus={'false'} >
              <img
                className="carousel-img"
                src={foto2}
                alt="Second slide"
              />

              
            </Carousel.Item>
            <Carousel.Item className='carousel-item'>
              <img
                className="carousel-img"
                src={foto3} 
                alt="Third slide"
              />

            </Carousel.Item>
          </Carousel>
    </div>
  )
}
