import React, { useState, useEffect } from 'react'
import MainPage from './Home/MainPage.jsx'
import ConfigMain from './Config/ConfigMain.jsx'
import ScanMain from './Scan/ScanMain'
import ResultMain from './Result/ResultMain'
import NavBar from './Components/NavBar'

function StartWrapper() {

    const [currentScreen, setCurrentScreen] = useState('main')
    
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
             <><MainPage /><NavBar /></>
        )
    }
    else if (currentScreen == 'config'){
        return (
             <><ConfigMain /><NavBar /></>
        )
    }
    else if (currentScreen == 'scan'){
        return (
             <><ScanMain /><NavBar /></>
        )
    }
    else if (currentScreen == 'result'){
        return (
             <><ResultMain /><NavBar /></>
        )
    }
    else {
        return (
             <p>error</p>
        )
    }

}

export default StartWrapper
