import React, { useState, useEffect } from 'react'
import MainPage from '../Home/MainPage.jsx'
import ConfigMain from '../Config/ConfigMain.jsx'

function MainMenu() {
            return (
            <><div>
            <h1>Hola, mundo!</h1>
            <p>Este es un mensaje en el navegador.</p>
        </div><div>
                <div id="sidebar">
                    <h1>React Router Contacts</h1>
                    <nav>
                        <ul>
                            <li>
                                <a href={`/scan`}>Scan</a>
                            </li>
                            <li>
                                <a href={`/qr`}>QR</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="detail"></div>
            </div></>
    )
}

export default MainMenu


