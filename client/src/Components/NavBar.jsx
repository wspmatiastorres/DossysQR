import React from 'react';
import './compo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

function NavBar(props) {
  return (
    <footer className="navbar-container">
      <div className='div1'>
        <button className='buttonmain' onClick={() => props.actuador('main')}>
          <FontAwesomeIcon icon={faHouse} />
        </button>
      </div>
      <div className='div1' >
        <button className='buttonconfig' onClick={() => props.actuador('config')}>
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>
      <div className='div1'>
        <button className='buttonscan' onClick={() => props.actuador('scan')}>
          <FontAwesomeIcon icon={faQrcode} />
        </button>
      </div>
      <div className='div1'>
        <button className='buttonresult' onClick={() => props.actuador('resultado')}>
          <FontAwesomeIcon icon={faSquarePollVertical} />
        </button>
      </div>
    </footer>
  );
}

export default NavBar;
