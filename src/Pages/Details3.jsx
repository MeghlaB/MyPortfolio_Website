import React from 'react'
import project6 from '../../src/assets/Projects/6.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
export default function Details3() {
  return (
    <div className='p-6 md:p-28 mainBg'>
           <div className="flex flex-col bg-[#1F1F38] shadow-xl text-white/75 border-hoverprimary border rounded p-6 my-10 mx-auto max-w-full sm:max-w-4xl space-y-6">
              <div className="w-full">
                <img className="w-full rounded-lg" src={project6} alt="Campaign" />
              </div>
          
              <div className='flex gap-3 m-5'>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               html
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                css
              </div>
              
            </div>
          
              <div>
                <h2 className="text-3xl font-bold mb-4">Gym Landing Page Project</h2>
                <p className="flex items-center gap-2 text-xl">
                In this project, I have built a responsive and user-friendly platform that allows users to easily navigate and interact with the content. The design ensures a smooth experience across all devices, whether on mobile, tablet, or desktop. Users can easily access and perform actions, making the overall process efficient and enjoyable. Features include intuitive navigation, clean layout, and responsive design to ensure accessibility and usability for everyone.
                </p>
              </div>
              <div className="card-actions flex justify-end gap-4">
                <a
                  href="https://github.com/MeghlaB/Assignment-02"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://meghlab.github.io/Assignment-02/"
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
