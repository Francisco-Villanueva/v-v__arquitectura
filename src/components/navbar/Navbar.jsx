import React from 'react'
import logo from '../../images/v+vLogo.png'
import './Navbar.css'
// import {useNavigate} from 'react-router-dom'
import  { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='navbar-main-container'>
        <div className='navbar-logo-container'>
            <img src={logo} alt='logo-v+v' className='navbar-logo-img'/>
          </div>
        <div className='navbar-links-container'>
           <p >Home</p>
           <p>Proyectos</p>
           <p>Quiénes Somos</p>
           <p>Qué Hacemos</p>
           <p>Contacto</p>
         </div>     
        <div className='navbar-redes-container'>
            <a href="https://www.instagram.com/arq.villanueva/">

            <FontAwesomeIcon  className='navbar-redes-icon icon-ig' icon={faInstagram}/>
            </a>

            <a href="">

            <FontAwesomeIcon className='navbar-redes-icon icon-fb' icon={faFacebook}/>
            </a>
            <a href="">

            <FontAwesomeIcon className='navbar-redes-icon icon-li' icon={faLinkedin}/>
            </a>
         </div>     
    </div>
  )
}
