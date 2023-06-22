import React, { useEffect, useState } from 'react';
import Html5QrcodePlugin from '../Components/Html5QrcodePlugin';
import Banner from '../Components/Banner'
import {isURL} from '../Components/Util'

const ConfigQR = (props) => {
  
  const onNewScanResult = (decodedText, decodedResult) => {
    // Manejar el resultado aquí.

    if(!isURL(decodedText)){
      // Se debe crear una especie de MODAL para
      // alertar de que el la URL entregada no es válida
      console.log('URL no válida')
      return
    }

    localStorage.setItem('dossysqr_api_url', decodedText);
    props.actuador('main')

  }

  return (
    <>
      <div>
        <Banner />
      </div>
      <center>
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
      </center>
    </>
  );
  
  
}

export default ConfigQR;
