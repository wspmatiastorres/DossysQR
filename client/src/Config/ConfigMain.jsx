import React, { useState } from 'react'
import ConfigAPI from './ConfigAPI'
import ConfigQR from './ConfigQR'
import './confi.css'

const ConfigMain = (props) => {
  const [mode, setMode] = useState('configAPI') // Valor inicial del modo: 'main', pero puedes ajustarlo según tus necesidades

  const handleModeChange = (newMode) => {
    setMode(newMode)
  }

  let componentToShow

  if (mode === 'configAPI') {
    componentToShow = <ConfigAPI actuador={props.actuador}/>
  } else if (mode === 'configQR') {
    componentToShow = <ConfigQR actuador={props.actuador}/>
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

export default ConfigMain
