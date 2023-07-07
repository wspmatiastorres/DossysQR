import React, { useState } from 'react'
import Html5QrcodePlugin from '../Components/Html5QrcodePlugin.jsx';
import Banner from '../Components/Banner'

function ScanMain(props) {
  // const [result, setResult] = useState('')

  const onNewScanResult = (decodedText, decodedResult) => {
    // Manejar el resultado aquí!

    // if isURL(decodedText) -> redirigirse a esa página
    // En caso contrario, setear el valor en result, tal como
    // se está haciendo ahora

    localStorage.setItem('dossysqr_api_url', decodedText);
    props.resultHandler(decodedText)
    props.actuador('resultado')

  }


  return (
    <>
      <div >
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
        <div>
        </div>
      </center>
    </>
  )
}

export default ScanMain


