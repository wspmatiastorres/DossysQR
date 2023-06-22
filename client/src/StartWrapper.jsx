import React, {useEffect, useState} from 'react';
import MainPage from './Home/MainPage.jsx';
import ConfigMain from './Config/ConfigMain.jsx';
import ScanMain from './Scan/ScanMain';
import Resultado from './Result/Resultado.jsx'
import NavBar from './Components/NavBar';

function StartWrapper() {
    const [currentScreen, setCurrentScreen] = useState('main');
    const [result, setResult] = useState('');

    useEffect(() => {
        // Eliminar los valores del Local Storage al iniciar la aplicación
        localStorage.removeItem('dossysqr_api_result');

        // Se debe chequear si está configurada la URL de la API
        const isAPIConfig = localStorage.getItem('dossysqr_api_url')

        if (isAPIConfig == null) {
            setCurrentScreen('config')
        }

    }, []);

    const handleScanResult = (result) => {
        setResult(result);
    };

    const handleCurrentScreen = (pantalla) => {
        // Se debe chequear si está configurada la URL de la API
        const isAPIConfig = localStorage.getItem('dossysqr_api_url')

        if (isAPIConfig == null) {
            setCurrentScreen('config')
        } else{
            setCurrentScreen(pantalla)
        }
    }

    if (currentScreen === 'main') {
        return (
          <>
          <MainPage/>
          <NavBar actuador = {handleCurrentScreen} pantalla={currentScreen}/>
          </>
        );

    } else if (currentScreen === 'config') {
        return (
          <>
          <ConfigMain onScanResult={handleScanResult} actuador={handleCurrentScreen}/>
          <NavBar actuador = {handleCurrentScreen} pantalla={currentScreen}/>
          </>
        );

    } else if (currentScreen === 'scan') {
        return (
          <>
          <ScanMain onScan={handleScanResult} actuador={handleCurrentScreen} resultHandler={setResult}/>
          <NavBar actuador = {handleCurrentScreen} pantalla={currentScreen}/>
          </>
        );

    } else if (currentScreen === 'resultado') {
        return (
          <>
          <Resultado result={result}/>
          <NavBar actuador = {handleCurrentScreen} pantalla={currentScreen}/>
          </>
        );

    } else {
        return <p>error</p>;

    }
}

export default StartWrapper;
