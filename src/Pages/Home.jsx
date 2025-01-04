import React from 'react';
import Banner from '../Components/Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import ContactUs from './ContactUs';



export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
}
