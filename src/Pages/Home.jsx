import React from 'react';
import Banner from '../Components/Banner';
import About from './About';
import Skills from './Skills';

import ContactUs from './ContactUs';
import Edit from './Edit';
import Project from './Project';



export default function Home() {
  return (
    <div>
      <Banner />
      {/* <Edit></Edit> */}
      <About />
      <Skills />
      <Project />
      <ContactUs />
    </div>
  );
}
