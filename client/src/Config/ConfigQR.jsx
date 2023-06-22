import React, { useEffect, useState } from 'react';
import Html5QrcodePlugin from '../Components/Html5QrcodePlugin.jsx';
import ResultMain from '../Result/ResultMain.jsx';
import Logo from '../img/Logo.png';

function ConfigQR() {
  const [result, setResult] = useState('');
  const [showResultMain, setShowResultMain] = useState(false);



  function onNewScanResult(decodedText, decodedResult) {
    // Manejar el resultado aquí.
    console.log("hola...");
    console.log(decodedText);
    console.log(decodedResult);

    // Guardar los datos en el Local Storage
    localStorage.setItem('dossysqr_api_url', decodedText);
    localStorage.setItem('dossysqr_api_url', JSON.stringify(decodedResult));

    setResult(decodedText);
    setShowResultMain(true);
  }

  const handleScanButtonClick = () => {
    props.actuador('scan');
  };

  return (
    <>
      {showResultMain ? (
        <ResultMain />
      ) : (
        <><div>
            <nav className='navbar'>
              <img src={Logo} alt="" />
            </nav>
          </div><center>
              <div className='containerr card'>
                <h1>Config DossysQR</h1>
                <Html5QrcodePlugin
                  fps={10}
                  qrbox={250}
                  disableFlip={false}
                  qrCodeSuccessCallback={onNewScanResult}
                  id="qr-code-scanner" />
                  <br /><br /><br /><br />
              </div>
              <br /><br /><br /><br /><br /><br /><br /><br />
            </center></>
      )}
    </>
  );
  
  
}

export default ConfigQR;
