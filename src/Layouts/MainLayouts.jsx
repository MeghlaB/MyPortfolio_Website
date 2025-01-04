import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'
import DynamicTitle from '../Components/DynamicTitle'


export default function MainLayouts() {
  return (
    <div>
    <DynamicTitle></DynamicTitle>
      <header className='mx-2 md:mx-4 lg:mx-6 bg-[#F8F5F4]'>
        <Navbar/>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
