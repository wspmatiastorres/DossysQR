import React, { useState } from 'react'
import ConfigAPI from './ConfigAPI'
import ConfigQR from './ConfigQR'
import './confi.css'

const App = () => {
  const [mode, setMode] = useState('configAPI') // Valor inicial del modo: 'main', pero puedes ajustarlo según tus necesidades

  const handleModeChange = (newMode) => {
    setMode(newMode)
  }

  let componentToShow

  if (mode === 'configAPI') {
    componentToShow = <ConfigAPI />
  } else if (mode === 'configQR') {
    componentToShow = <ConfigQR />
  }

  return (
    <>
    <div>
      {componentToShow}
      <center>
        {mode === 'configAPI' ? <button onClick={() => handleModeChange('configQR')}>QR</button> : <button onClick={() => handleModeChange('configAPI')}>Manual</button>}
      </center>
    </div></>
  )
}

export default App
