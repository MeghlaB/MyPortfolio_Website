import React from 'react'
import project1 from '../../src/assets/Projects/5.png'
import project2 from '../../src/assets/Projects/4.png'
import project3 from '../../src/assets/Projects/3.png'
import project4 from '../../src/assets/Projects/2.png'
import project5 from '../../src/assets/Projects/1.png'
import project6 from '../../src/assets/Projects/6.png'
import { FaGithub, FaLink } from 'react-icons/fa'
import { FaLinkSlash } from 'react-icons/fa6'
import { Helmet } from 'react-helmet'


export default function Projects() {
  return (
    <section id="skills" className="py-16 text-white">
      
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-hoverprimary mt-6 mb-6">
          My Projects
          <div className="mt-3 w-32 mx-auto border-t-4 border-hoverprimary"></div>
        </h2>

        <div className="grid grid-cols-1 h-full  px-3 md:px-2 lg:px-0 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-8">
          {/* projects-1 */}
          <div className="card border border-purple-800  shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project1}
                alt="BPL Dream Project"
                className="rounded-xl object-cover w-80"
              />
            </figure>
            <div className='flex gap-3 m-5 flex-wrap'>
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

              <h2 className="card-title text-xl font-bold text-white">Bpl Dream</h2>
              <p className="text-white/75 mb-4 text-left">
              This website is made for a Cricket Player bidding Company , named PLAYERHUNT.....
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/BPL-DREAM"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://vengeful-lawyer.surge.sh/"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>
          {/* projects-2 */}
          <div className="card border border-purple-800  shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project2}
                alt="BPL Dream Project"
                className="rounded-xl object-cover w-80"
              />
            </figure>
            <div className='flex gap-3 m-5 flex-wrap'>
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

              <h2 className="card-title text-xl font-bold text-white">Pet Adoption PlatForm</h2>
              <p className="text-white/75 mb-4 text-left">
              The Website is made for a pet adoption platform named by PEDDY. Each adopta....
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Pet-_Adoption_Platform?tab=readme-ov-file"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary  border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://peddyhome321.surge.sh/"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>
          {/* projects-3 */}
          <div className="card border border-purple-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project3}
                alt="BPL Dream Project"
                className="rounded-xl object-cover w-80"
              />
            </figure>
            <div className='flex gap-3 m-5 flex-wrap'>
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
              Donate Bangladesh is a web platform dedicated to bringing communities together for the common good ........
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Assingment-05"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://meghlab.github.io/Assingment-05/"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary  border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>
          {/* projects-4 */}
          <div className="card border border-purple-800  shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project6}
                alt="BPL Dream Project"
                className="rounded-xl object-cover w-80"
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
              This project my programming hero Assignment number two, in this is project ..........
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Assignment-02"
                  className="text-xl btn flex items-center gap-2 thover:text-whitebg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow bg-hoverprimary border-none hover:bg-btnprimary text-white/75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="-https://meghlab.github.io/Assignment-02/"
                  className="text-xl btn flex items-center gap-2 text-white/75 bg-hoverprimary hover:bg-btnprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>
          {/* projects-5 */}
          <div className="card border border-purple-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project4}
                alt="BPL Dream Project"
                className="rounded-xl object-cover w-80"
              />
            </figure>
            <div className='flex gap-3 m-5 flex-wrap'>
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
              A modern barn house blends rustic charm with contemporary design, featuring open floor plans.......
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Assingment-03"
                  className="text-xl btn flex items-center gap-2 bg-hoverprimary transition-all duration-200 px-4 py-2 rounded-lg shadow hover:bg-btnprimary border-none text-white/75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://meghlab.github.io/Assingment-03/"
                  className="text-xl btn flex items-center gap-2 bg-hoverprimary hover:bg-btnprimary text-white/75bg-hoverprimary transition-all duration-200 px-4 py-2 border-none rounded-lg shadow text-white/75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink /> Live Link
                </a>
              </div>
            </div>
          </div>
          {/* projects-5 */}
          <div className="card border border-purple-800  shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project5}
                alt="BPL Dream Project"
                className="rounded-xl object-cover w-80"
              />
            </figure>
            <div className='flex gap-3 m-5 flex-wrap'>
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

              <h2 className="card-title text-xl font-bold text-white">Landing Page Design</h2>
              <p className="text-white/75 mb-4 text-left">
              This Portfolio landing page is not reresponsive for mobile devices and any other devices, .......
              </p>
              <div className="card-actions flex justify-center gap-4">
                <a
                  href=""
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://vengeful-lawyer.surge.sh/"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75  bg-hoverprimary border-none  transition-all duration-200 px-4 py-2 rounded-lg shadow"
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
