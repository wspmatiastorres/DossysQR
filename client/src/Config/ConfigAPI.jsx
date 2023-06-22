import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '../img/Logo.png';

import './confi.css';

function ConfigAPI() {
  return (
    <>
      <div >
        <nav className='navbar'>
          <img src={Logo} alt="" />
        </nav>
      </div>
      <br />
      <div >

        <center>
          <div>
          <h2>Escanea un código QR!</h2>
          </div>
          <div className='card'>
            ConfigAPI
          </div>
        </center>
      </div>
    </>
  );
}

export default ConfigAPI;
