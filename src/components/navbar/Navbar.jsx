import React, { useState } from 'react'
// import logo from '../../images/v+vLogo.png'
import logo from '../../images/logo.webp'
import './Navbar.css'
// import {useNavigate} from 'react-router-dom'
import  { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className='navbar-main-container'>
        <div className='navbar-logo-container'>
            <img src={logo} alt='logo-v+v' className='navbar-logo-img'/>
          </div>
        <div className='navbar-links-container'>
           <p className={activeItem === 'Home' ? 'active' : 'inactive'} onClick={() => handleItemClick('Home')}>Home</p>
           <p className={activeItem === 'Proyectos' ? 'active' : 'inactive'} onClick={()=> handleItemClick('Proyectos')} >Proyectos</p>
           <p className={activeItem === 'Quien' ? 'active' : 'inactive'} onClick={()=> handleItemClick('Quien')} >Quiénes Somos</p>
           <p className={activeItem === 'Que hacemos' ? 'active' : 'inactive'} onClick={()=> handleItemClick('Que hacemos')} >Qué Hacemos</p>
           <p className={activeItem === 'Contacto' ? 'active' : 'inactive'} onClick={()=> handleItemClick('Contacto')} >Contacto</p>
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
