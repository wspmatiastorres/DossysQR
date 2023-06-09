import React, { useEffect } from 'react'
import Html5QrcodePlugin from '../Html5QrcodePlugin.jsx'

function onNewScanResult(decodedText, decodedResult) {
  // Manejar el resultado aquí.
  console.log("hola...")
  console.log(decodedText)
  console.log(decodedResult)
  
  // Guardar los datos en el Local Storage
  localStorage.setItem('dossysqr_api_url', decodedText);
  localStorage.setItem('dossysqr_api_url', JSON.stringify(decodedResult));
}

function ConfigQR() {

  return (
    <div>
      <h1>Config DossysQR</h1>
      <Html5QrcodePlugin 
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
        id="qr-code-scanner"
      />
    </div>
  )
}

export default ConfigQR
