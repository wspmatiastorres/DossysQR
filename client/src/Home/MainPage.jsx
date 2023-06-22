import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';
import Logo from '../img/Logo.png';
import AMP from '../img/AMP.png'

function MainPage() {
  return (
    <>
      <div>
        <nav className="navbar">
          <img src={Logo} alt="" />
          <div className='div1 textoEstilizado'>
            <h2>Hola, Bienvenido.</h2>
          </div>
        </nav>
      </div>
      <center>
      <br /><br /><br />
        <div className="card">
          <img src={AMP} alt="" />
          <div className="card-body">
            {/* <h5 className="card-title">Título de la tarjeta</h5> */}
            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error libero,
                laborum magni nulla, ratione possimus nemo corrupti porro ullam qui blanditiis. Id beatae a assumenda eaque neque minima ipsam sunt.</p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default MainPage;
