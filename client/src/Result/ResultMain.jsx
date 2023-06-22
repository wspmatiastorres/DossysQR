import React, { useEffect, useState } from 'react';
import '../Config/confi.css'
import './style.css'
import Logo from '../img/Logo.png';

const ResultMain = (props) => {
  const [result, setResult] = useState('');

  useEffect(() => {
    // Obtener el valor guardado en el Local Storage
    const storedData = localStorage.getItem('dossysqr_api_url');

    // Comprobar si hay un valor almacenado
    if (storedData) {
      // Si hay un valor, actualizar el estado con el resultado
      const parsedData = JSON.parse(storedData);

       // Acceder a la propiedad deseada
       const specificValue = parsedData.decodedText;

       // Actualizar el estado con el valor específico
       setResult(specificValue);
    }
  }, []);

  return (
    <>
     <div >
        <nav className='navbar'>
          <img src={Logo} alt="" />
        </nav>
      </div>
    <center>
    <div className=' puntodequiebre'>
      <h2>Resultado del Escaneo:</h2>
      <center>
        <p>{result}</p>
      </center>
      <br /><br />

    </div>
    </center>
    </>
  );
};

export default ResultMain;
