import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './Home/MainPage'
import ConfigMain from './Config/ConfigMain'
import ScanMain from './Scan/ScanMain'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    // ScanElement:<Scan /> 
  },
  {
    path: "/Config",
    element: <ConfigMain />,
  },
  {
    path: "/Scan",
    element: <ScanMain />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

