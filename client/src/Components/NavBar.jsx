import React, { useState } from 'react';
import './compo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

function NavBar(props) {
  const [activePage, setActivePage] = useState('main');

  const handleButtonClick = (page) => {
    props.actuador(page);
    setActivePage(page);
  };

  return (
    <footer className="navbar-container">
      <div className={`div1 ${activePage === 'main' ? 'active' : ''}`}>
        <button
          className={`buttonmain ${activePage === 'main' ? 'active' : ''}`}
          onClick={() => handleButtonClick('main')}
        >
          <FontAwesomeIcon icon={faHouse} />
        </button>
      </div>
      <div className={`div1 ${activePage === 'config' ? 'active' : ''}`}>
        <button
          className={`buttonconfig ${activePage === 'config' ? 'active' : ''}`}
          onClick={() => handleButtonClick('config')}
        >
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>
      <div className={`div1 ${activePage === 'scan' ? 'active' : ''}`}>
        <button
          className={`buttonscan ${activePage === 'scan' ? 'active' : ''}`}
          onClick={() => handleButtonClick('scan')}
        >
          <FontAwesomeIcon icon={faQrcode} />
        </button>
      </div>
      <div className={`div1 ${activePage === 'resultado' ? 'active' : ''}`}>
        <button
          className={`buttonresult ${activePage === 'resultado' ? 'active' : ''}`}
          onClick={() => handleButtonClick('resultado')}
        >
          <FontAwesomeIcon icon={faSquarePollVertical} />
        </button>
      </div>
    </footer>
  );
}

export default NavBar;