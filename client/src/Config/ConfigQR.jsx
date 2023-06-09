import React, { useEffect, useState } from 'react'
import Html5QrcodePlugin from '../Components/Html5QrcodePlugin.jsx'

function ConfigQR() {

  const [result, setResult] = useState('')
  /*
  result es una variable a tu antojo. Como el default yo lo puse '', en este caso es string
  setResult es una función, que se ocupa para cambiar el valor de result
  */

  function onNewScanResult(decodedText, decodedResult) {
    // Manejar el resultado aquí.
    console.log("hola...")
    console.log(decodedText)
    console.log(decodedResult)

    // Guardar los datos en el Local Storage
    localStorage.setItem('dossysqr_api_url', decodedText);
    localStorage.setItem('dossysqr_api_url', JSON.stringify(decodedResult));

    setResult(decodedText);
  }

  return (
    <><div>
      <h1>Config DossysQR</h1>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
        id="qr-code-scanner" />
    </div><h1>{result}</h1></>
  )
}

export default ConfigQR
