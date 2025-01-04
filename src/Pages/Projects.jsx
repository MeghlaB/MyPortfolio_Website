import React from 'react'
import project1 from '../../src/assets/Projects/5.png'
import project2 from '../../src/assets/Projects/4.png'
import project3 from '../../src/assets/Projects/3.png'
import project4 from '../../src/assets/Projects/2.png'
import project5 from '../../src/assets/Projects/1.png'
import project6 from '../../src/assets/Projects/6.png'
import { FaGithub, FaLink } from 'react-icons/fa'
import { FaLinkSlash } from 'react-icons/fa6'

export default function Projects() {
  return (
    <section id="skills" className="py-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-hoverprimary mb-6">
          My Projects
          <div className="mt-3 w-32 mx-auto border-t-4 border-hoverprimary"></div>
        </h2>

        <div className="grid grid-cols-1 h-full  px-3 md:px-2 lg:px-0 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-8">
          {/* projects-1 */}
          <div className="card border w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project1}
                alt="BPL Dream Project"
                className="rounded-xl object-cover"
              />
            </figure>
            <div className='flex gap-3 m-5'>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               html
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                tailwindcss
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               react
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                daisyUi
              </div>
            </div>
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">BPL DREAM</h2>
              <p className="text-white/75 mb-4 text-left">
              This website is made for a Cricket Player bidding Company , named PLAYERHUNT *All information on this website is fetched locally in JSON format. It is built using REACT and VITE, so it has no loading and VITE comes with hot reloading.
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/BPL-DREAM"
                  className="text-xl btn flex items-center gap-2 text-gray-800 hover:text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://vengeful-lawyer.surge.sh/"
                  className="text-xl btn flex items-center gap-2 text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>
          {/* projects-2 */}
          <div className="card border w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project2}
                alt="BPL Dream Project"
                className="rounded-xl object-cover"
              />
            </figure>
            <div className='flex gap-3 m-5'>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               html
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                tailwindcss
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               react
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                daisyUi
              </div>
            </div>
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">PET ADOPTION PLATFORM</h2>
              <p className="text-white/75 mb-4 text-left">
              The Website is made for a pet adoption platform named by PEDDY. Each adoptable pet will have a detailed profile, including their breed, age, size, temperament, health status, and photos, so that potential adopters can make informed decisions.
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Pet-_Adoption_Platform?tab=readme-ov-file"
                  className="text-xl btn flex items-center gap-2 text-gray-800 hover:text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://peddyhome321.surge.sh/"
                  className="text-xl btn flex items-center gap-2 text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>
          {/* projects-3 */}
          <div className="card border w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project3}
                alt="BPL Dream Project"
                className="rounded-xl object-cover"
              />
            </figure>
            <div className='flex gap-3 m-5'>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               html
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                Js
              </div>
              
            </div>
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">Donate Bangladesh
              </h2>
              <p className="text-white/75 mb-4 text-left">
              Donate Bangladesh is a web platform dedicated to bringing communities together for the common good of those in need across Bangladesh. We believe that every act of kindness, no matter how small, can create a ripple effect of positive change.
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Assingment-05"
                  className="text-xl btn flex items-center gap-2 text-gray-800 hover:text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://meghlab.github.io/Assingment-05/"
                  className="text-xl btn flex items-center gap-2 text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>
          {/* projects-4 */}
          <div className="card border w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project6}
                alt="BPL Dream Project"
                className="rounded-xl object-cover"
              />
            </figure>
            <div className='flex gap-3 m-5'>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               html
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                css
              </div>
              
            </div>
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">Gym Landing Page Project</h2>
              <p className="text-white/75 mb-4 text-left">
              This project my programming hero Assignment number two, in this is project i;m using HTML and CSS. this project is totally responsive for mobile, tabl...
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Assignment-02"
                  className="text-xl btn flex items-center gap-2 text-gray-800 hover:text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="-https://meghlab.github.io/Assignment-02/"
                  className="text-xl btn flex items-center gap-2 text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>
          {/* projects-4 */}
          <div className="card border w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project4}
                alt="BPL Dream Project"
                className="rounded-xl object-cover"
              />
            </figure>
            <div className='flex gap-3 m-5'>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               html
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                tailwindcss
              </div>
             
            </div>
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">Modern Barn House Design</h2>
              <p className="text-white/75 mb-4 text-left">
              A modern barn house blends rustic charm with contemporary design, featuring open floor plans, vaulted ceilings, natural wood and metal materials, large windows, minimalist furnishings, and sustainable, energy-efficient features.
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Assingment-03"
                  className="text-xl btn flex items-center gap-2 text-gray-800 hover:text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://meghlab.github.io/Assingment-03/"
                  className="text-xl btn flex items-center gap-2 text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>
          {/* projects-5 */}
          <div className="card border w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project5}
                alt="BPL Dream Project"
                className="rounded-xl object-cover"
              />
            </figure>
            <div className='flex gap-3 m-5'>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
               html
              </div>
              <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
                Css
              </div>
             
            </div>
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">Landing Page With Devloper</h2>
              <p className="text-white/75 mb-4">
              This  landing page is not reresponsive for mobile devices and any other devices, like laptop or tablet. reresponsiveness add will very soon.
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Assingment_01"
                  className="text-xl btn flex items-center gap-2 text-gray-800 hover:text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://meghlab.github.io/Assingment_01/"
                  className="text-xl btn flex items-center gap-2 text-white bg-btnprimary hover:bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
