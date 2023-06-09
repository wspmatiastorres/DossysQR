import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import StartWrapper from './StartWrapper'
import MainMenu from './routes/MainMenu'
import Scan from './routes/Scan'
import './index.css'
import { BrowserRouter as Router, Route,createBrowserRouter } from 'react-router-dom';



const Config = () => {
  return <h1>Página de contacto</h1>;
};


const Result = () => {
  return <h1>Página de contacto</h1>;
};


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainMenu />,
    ScanElement:<Scan /> 
  },
  {
    path: "/Config",
    element: Config(),
  },
  {
    path: "/Scan",
    element:<Scan /> ,
  },
  {
    path: "/Result",
    element: Result(),
  },
  {
    path: "/qr",
    element: <StartWrapper />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StartWrapper />,
    <MainMenu  />,
    <Scan  />,
    <Result />
  </React.StrictMode>,
)

