import React from 'react'
import project3 from '../../src/assets/Projects/3.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
export default function Details2() {
  return (
    // projects
    <div className='p-6 md:p-28 mainBg'>
       <div className="flex flex-col bg-[#1F1F38] shadow-xl text-white/75 border-hoverprimary border rounded p-6 my-10 mx-auto max-w-full sm:max-w-4xl space-y-6">
          <div className="w-full">
            <img className="w-full rounded-lg" src={project3} alt="Campaign" />
          </div>
      
          <div className='flex gap-3 m-5 flex-wrap'>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               html
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                Js
              </div>
              
            </div>
      
          <div>
            <h2 className="text-3xl font-bold mb-4">Donate Bangladesh</h2>
            <p className="flex items-center gap-2 text-xl">
            Donate Bangladesh is a responsive and user-friendly platform designed to make giving back easy. It offers a seamless experience across devices, allowing users to quickly donate to various causes, including food, clothing, education, healthcare, and disaster relief, ensuring that everyone can contribute to building a better future for those in need.
            </p>
          </div>
          <div className="card-actions flex justify-end gap-4">
            <a
              href="https://github.com/MeghlaB/Assingment-05"
              className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://github.com/MeghlaB/Assingment-05"
              className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
    </div>
  )
}
