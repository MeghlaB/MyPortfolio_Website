import React from 'react'
import Banner from '../Components/Banner'

import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import ContactUs from './ContactUs'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div >
        <Helmet>
        <title>
          Portfolio || Home
        </title>
          </Helmet>
      <div>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <ContactUs></ContactUs>
      </div>
    </div>
  )
}
