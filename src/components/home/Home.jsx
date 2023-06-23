import React from 'react'
import fondo from '../../images/home.jpg'
import Navbar from '../navbar/Navbar'
import './Home.css'
export default function Home() {
  return (
    <div className='home-main-container'>
      <div className='container_navBarCompononent'>
        <Navbar/>

      </div>
      <div className='Home-body'>
        <div className='container_carruselCompononent'>
                <img src={fondo} alt="fonde home" />
        </div>
        <div>
          <h2>V + V  Arquitectura</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non saepe repudiandae recusandae ipsum nihil quis eligendi consequuntur dolorem voluptatum iste exercitationem explicabo modi incidunt voluptas, hic sequi ducimus dignissimos.
          </p>
        </div>
      </div>
    </div>
  )
}
