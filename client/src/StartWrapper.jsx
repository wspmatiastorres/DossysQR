import React, { useState, useEffect } from 'react'
import MainPage from './Home/MainPage.jsx'
import ConfigMain from './Config/ConfigMain.jsx'
import ScanMain from './Scan/ScanMain'
import ResultMain from './Result/ResultMain'
import NavBar from './Components/NavBar'

function StartWrapper() {

    const [currentScreen, setCurrentScreen] = useState('result')
    const [result, setResult] = useState('djfokisdhjgfkldshjgoksdhf')
    
    // const [hasAPIKey, setHasAPIKey] = useState(false)
    // const [APIUrl, setAPIUrl] = useState('')

    // useEffect(() => {
    //     // Verificar si existe la clave "dossysqr_api_url" en la base de datos del navegador
    //     const apiKeyExists = localStorage.getItem('dossysqr_api_url') !== null;
    //     setHasAPIKey(apiKeyExists);
    //   }, []
    // )


    if (currentScreen == 'main'){
        return (
             <><MainPage /><NavBar actuador={setCurrentScreen} /></>
        )
    }
    else if (currentScreen == 'config'){
        return (
             <><ConfigMain /><NavBar actuador={setCurrentScreen} /></>
        )
    }
    else if (currentScreen == 'scan'){
        return (
             <><ScanMain /><NavBar actuador={setCurrentScreen} /></>
        )
    }
    else if (currentScreen == 'result'){
        return (
             <><ResultMain result={result} /><NavBar actuador={setCurrentScreen} /></>
        )
    }
    else {
        return (
             <p>error</p>
        )
    }

}

export default StartWrapper
