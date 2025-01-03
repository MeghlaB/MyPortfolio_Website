import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

export default function MainLayouts() {
  return (
    <div>
      <header className='mx-2 md:mx-4 lg:mx-6 bg-[#F8F5F4]'>
        <Navbar/>
      </header>
      <Outlet></Outlet>
    </div>
  )
}
