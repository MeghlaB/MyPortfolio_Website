import React from 'react';
import Banner from '../Components/Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import ContactUs from './ContactUs';
import Edit from './Edit';



export default function Home() {
  return (
    <div>
      <Banner />
      <Edit></Edit>
      <About />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
}
