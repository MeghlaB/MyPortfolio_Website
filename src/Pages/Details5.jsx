import React from 'react'
import project5 from '../../src/assets/Projects/1.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
export default function Details5() {
  return (
     <div className='p-6 md:p-28 mainBg'>
               <div className="flex flex-col bg-[#1F1F38] shadow-xl text-white/75 border-green-500 border rounded p-6 my-10 mx-auto max-w-full sm:max-w-4xl space-y-6">
                  <div className="w-full">
                    <img className="w-full rounded-lg" src={project5} alt="Campaign" />
                  </div>
              
                  <div className='flex gap-3 m-5'>
                  <div className="badge badge-outline hover:bg-green-600 hover:text-white">
                   html
                  </div>
                  <div className="badge badge-outline hover:bg-green-600 hover:text-white">
                    css
                  </div>
                  
                </div>
              
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Landing Page Design</h2>
                    <p className="flex items-center gap-2 text-xl">
                    portfolio landing page is not responsive due to the lack of proper media queries, viewport settings, and flexible layouts. Implement mobile-first design with CSS media queries to adjust elements based on device screen sizes.
                    </p>
                  </div>
                  <div className="card-actions flex justify-end gap-4">
                    <a
                      href="https://github.com/MeghlaB/Assingment_01"
                      className="text-xl btn flex items-center gap-2 hover:bg-green-600 text-white/75 bg-green-600 border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://meghlab.github.io/Assingment_01/"
                      className="text-xl btn flex items-center gap-2 hover:bg-green-600 text-white/75 bg-green-600 border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
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
