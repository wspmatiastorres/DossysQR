import React, {useState} from 'react'
import Logo from '../img/Logo.png';
import Html5QrcodePlugin from '../Components/Html5QrcodePlugin.jsx';
function ScanMain() {
    // const [result, setResult] = useState('')


    return (
        <>
        <div >
        <nav className='navbar'>
          <img src={Logo} alt="" />
        </nav>
      </div>
        <center>
          <div>
          <h1>Hola, ScanMain!</h1>
          </div>
        <div className='card'>
            <p>Este es un mensaje en el navegador.</p>
        </div>
        <div>
                {/* <p>Resultado: {result}</p> */}
            </div>
            </center>
            </>
    )
}

export default ScanMain


