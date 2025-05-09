import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import bg from '../src/assets/bg.png'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className='bg-[#191f36]'>
  <RouterProvider router={router} />
  </div>
    </HelmetProvider>

</React.StrictMode>
)
