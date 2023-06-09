import React, { useState, useEffect } from 'react'
import MainPage from './Home/MainPage.jsx'
import ConfigMain from './Config/ConfigMain.jsx'

function StartWrapper() {
    const [hasAPIKey, setHasAPIKey] = useState(false)
    const [APIUrl, setAPIUrl] = useState('')

    useEffect(() => {
        // Verificar si existe la clave "dossysqr_api_url" en la base de datos del navegador
        const apiKeyExists = localStorage.getItem('dossysqr_api_url') !== null;
        setHasAPIKey(apiKeyExists);
      }, []
    )

    return (
        <div>
            {hasAPIKey ? <MainPage /> : <ConfigMain />}
        </div>
    )
}

export default StartWrapper
