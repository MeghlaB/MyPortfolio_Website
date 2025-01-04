import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project4 from '../../src/assets/Projects/2.png'
export default function Details4() {
  return (
    <div className='p-6 md:p-28 mainBg'>
              <div className="flex flex-col bg-[#1F1F38] shadow-xl text-white/75 border-hoverprimary border rounded p-6 my-10 mx-auto max-w-full sm:max-w-4xl space-y-6">
                 <div className="w-full">
                   <img className="w-full rounded-lg" src={project4} alt="Campaign" />
                 </div>
             
                 <div className='flex gap-3 m-5 flex-wrap'>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               html
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                tailwindcss
              </div>
             
            </div>
             
                 <div>
                   <h2 className="text-3xl font-bold mb-4">Modern Barn House Design</h2>
                   <p className="flex items-center gap-2 text-xl">
                   The modern barn house design blends rustic charm with contemporary elements, creating a stylish and functional living space. The exterior features large glass windows, wooden panels, and sleek metal roofing, offering a modern aesthetic while retaining a natural, rustic feel. The front porch is spacious, perfect for outdoor relaxation, with comfortable seating that invites social gatherings. Surrounding the house is lush greenery, enhancing the connection to nature.
                   </p>
                 </div>
                 <div className="card-actions flex justify-end gap-4">
                   <a
                     href="https://meghlab.github.io/Assingment-03/"
                     className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <FaGithub />
                   </a>
                   <a
                     href="https://meghlab.github.io/Assingment-03/"
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
