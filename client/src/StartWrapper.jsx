import React, { useEffect,useState } from 'react';
import MainPage from './Home/MainPage.jsx';
import ConfigMain from './Config/ConfigMain.jsx';
import ScanMain from './Scan/ScanMain';
import ResultMain from './Result/ResultMain';
import Resultado from './Result/Resultado.jsx'
import NavBar from './Components/NavBar';



function StartWrapper() {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [result, setResult] = useState('');
  useEffect(() => {
    // Eliminar los valores del Local Storage al iniciar la aplicación
    localStorage.removeItem('dossysqr_api_url');
    localStorage.removeItem('dossysqr_api_result');
  }, []);
  const handleScanResult = (result) => {
    setResult(result);
  };

  if (currentScreen === 'main') {
    return (
      <>
        <MainPage />
        <NavBar actuador={setCurrentScreen} />
      </>
    );
  } else if (currentScreen === 'config') {
    return (
      <>
        <ConfigMain onScanResult={handleScanResult} /> {/* Paso la función como prop */}
        <NavBar actuador={setCurrentScreen} />
      </>
    );
  }
   else if (currentScreen === 'scan') {
    return (
      <>
        <ScanMain onScan={handleScanResult} />
        <NavBar actuador={setCurrentScreen} />
      </>
    );
  } else if (currentScreen === 'resultado') {
    return (
      <>
        <Resultado result={result} />
        <NavBar actuador={setCurrentScreen} />
      </>
    );
  } else {
    return <p>error</p>;
  }
}

export default StartWrapper;
