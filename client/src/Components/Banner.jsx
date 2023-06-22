import React from 'react'
import Logo from '../img/Logo.png';

function Banner() {
  return (
    <nav className="navbar">
        <img src={Logo} alt="" />
        <div className='div1 textoEstilizado'>
        <h2>Hola, Bienvenido.</h2>
        </div>
    </nav>
  )
}

export default Banner