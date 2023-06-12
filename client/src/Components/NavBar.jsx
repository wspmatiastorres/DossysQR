import React from 'react'

function NavBar(props) {

  return (
    <>
    <div>NavBar</div>
    <div>
      <button onClick={() => props.actuador('config')}>Config</button>
    </div>
    <div>
      <button onClick={function(){props.actuador('scan')}}>Scan</button>
    </div>
    </>
  )
}

export default NavBar