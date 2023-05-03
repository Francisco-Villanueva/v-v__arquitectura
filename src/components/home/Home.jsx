import React from 'react'
import Carrusel from '../carrusel/Carrusel'
import Navbar from '../navbar/Navbar'
import './Home.css'
export default function Home() {
  return (
    <div className='home-main-container'>
      <div>
        <Navbar/>

      </div>
      <div>

        <Carrusel />
      </div>
    </div>
  )
}
