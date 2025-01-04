import React from 'react'
import Marquee from "react-fast-marquee"
import html from '../../src/assets/icons/html.jpeg';
import css from '../../src/assets/icons/css.png';
import react from '../../src/assets/icons/react.png';
import tailwind from '../../src/assets/icons/tailwind.png';
import mongodb from '../../src/assets/icons/mongodb.png';
import js from '../../src/assets/icons/js.png';
import vue from '../../src/assets/icons/vue.png';

export default function Edit() {
  return (
    <div className=' mx-4 lg:mx-48 border-purple-700 border mt-48 lg:mt-14 py-6 px-4  rounded-lg shadow-lg'>
  <Marquee className='text-white gap-12 '>
    <img src={html} alt="HTML" className='h-20 w-auto object-contain mx-4' />
    <img src={css} alt="CSS" className='h-20 w-auto object-contain mx-4' />
    <img src={react} alt="React" className='h-20 w-auto object-contain mx-4' />
    <img src={tailwind} alt="Tailwind CSS" className='h-20 w-auto object-contain mx-4' />
    <img src={mongodb} alt="MongoDB" className='h-20 w-auto object-contain mx-4' />
    <img src={js} alt="MongoDB" className='h-20 w-auto object-contain mx-4' />
    <img src={vue} alt="MongoDB" className='h-20 w-auto object-contain mx-4' />
  </Marquee>
</div>

  
  )
}
