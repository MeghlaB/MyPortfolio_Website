import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className=''>
  <RouterProvider router={router} />
  </div>
</React.StrictMode>
)