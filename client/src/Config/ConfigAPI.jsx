import React, { useState } from 'react';
import Banner from '../Components/Banner';
import './confi.css';
import { isURL } from '../Components/Util';

function ConfigAPI(props) {
  const [decodedText, setDecodedText] = useState('');
  const [error, setError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleInputChange = (event) => {
    setDecodedText(event.target.value);
    setError('');
  };

  const handleDeleteButtonClick = () => {
    if (decodedText === '') {
      return;
    }

    setIsDeleting(true);

    const textLength = decodedText.length;
    let currentIndex = textLength - 1;

    const deleteLetter = () => {
      setDecodedText((prevText) => prevText.slice(0, currentIndex));

      currentIndex--;

      if (currentIndex >= 0) {
        setTimeout(deleteLetter, 100);
      } else {
        setIsDeleting(false);
      }
    };

    deleteLetter();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (decodedText.trim() === '') {
      setError('Por favor, ingresa una Url');
      return;
    }

    if (!isURL(decodedText)) {
      setError('La Url ingresada no es válida.');
      return; // Evita que se guarde la URL inválida
    }
    localStorage.setItem('dossysqr_api_url', decodedText);
    // Aquí puedes realizar otras acciones con la URL ingresada, como enviarla a una API, etc.
    props.actuador('main');
  };

  return (
    <>
      <div>
        <Banner />
      </div>
      <br />
      <div>
        <center>
          <div>
            <h2>Escanea un código QR o ingresa una URL</h2>
          </div>
          <div className='card'>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder='Ingresa una URL'
                value={decodedText}
                onChange={handleInputChange}
              />
              {error && <p className="error-message">{error}</p>}
              <div className="button-container">
                <button type="button" onClick={handleDeleteButtonClick}>
                  Limpiar
                </button>
                <button type="submit">Guardar</button>
              </div>
            </form>
          </div>
        </center>
      </div>
    </>
  );
}

export default ConfigAPI;
