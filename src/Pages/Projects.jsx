import React from 'react'
import project1 from '../../src/assets/Projects/5.png'
import project2 from '../../src/assets/Projects/4.png'
import project3 from '../../src/assets/Projects/3.png'
import project4 from '../../src/assets/Projects/2.png'
import project5 from '../../src/assets/Projects/1.png'
import project6 from '../../src/assets/Projects/6.png'
import { FaExternalLinkAlt, FaGithub, FaLink } from 'react-icons/fa'
import { FaLinkSlash } from 'react-icons/fa6'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


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
            
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">Bpl Dream</h2>
              <p className="text-white/75  text-left">
              This website is made for a Cricket Player bidding Company , named PLAYERHUNT.....
              </p>
              <div className="card-actions py-6 flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/BPL-DREAM"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://vengeful-lawyer.surge.sh/"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaExternalLinkAlt />
                </a>
                <Link to={'/details'}>
                  <button className='btn bg-hoverprimary hover:bg-btnprimary border-none text-white '>
                    view Details
                  </button>
                </Link>
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
  
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">Pet Adoption PlatForm</h2>
              <p className="text-white/75  text-left">
              The Website is made for a pet adoption platform named by PEDDY. Each adopta....
              </p>
              <div className="card-actions py-6 flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Pet-_Adoption_Platform"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://peddyhome321.surge.sh/"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> 
                </a>
                <Link to={'/details1'}>
                  <button className='btn bg-hoverprimary hover:bg-btnprimary border-none text-white '>
                    view Details
                  </button>
                </Link>
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
            
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">Donate Bangladesh
              </h2>
              <p className="text-white/75  text-left">
              Donate Bangladesh is a web platform dedicated to bringing communities together for the common good ........
              </p>
              <div className="card-actions flex py-6 justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Assingment-05"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://meghlab.github.io/Assingment-05/"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
                <Link to={'/details2'}>
                  <button className='btn bg-hoverprimary hover:bg-btnprimary border-none text-white '>
                    view Details
                  </button>
                </Link>
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
            
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">Gym Landing Page Project</h2>
              <p className="text-white/75  text-left">
              This project my programming hero Assignment number two, in this is project ..........
              </p>
              <div className="card-actions py-6 flex justify-center gap-4">
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
                <Link to={'/details3'}>
                  <button className='btn bg-hoverprimary hover:bg-btnprimary border-none text-white '>
                    view Details
                  </button>
                </Link>
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
            
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">Modern Barn House Design</h2>
              <p className="text-white/75 py-6 text-left">
              A modern barn house blends rustic charm with contemporary design, featuring open floor plans.......
              </p>
              <div className="card-actions flex py-6 justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Assingment-03"
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
                <Link to={'/details4'}>
                  <button className='btn bg-hoverprimary hover:bg-btnprimary border-none text-white '>
                    view Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* projects-6 */}
          <div className="card border border-purple-800  shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project5}
                alt="BPL Dream Project"
                className="rounded-xl object-cover w-80"
              />
            </figure>
            <div className="card-body text-center">

              <h2 className="card-title text-xl font-bold text-white">Landing Page Design</h2>
              <p className="text-white/75  text-left">
              This Portfolio landing page is not reresponsive for mobile devices and any other devices, .......
              </p>
              <div className="card-actions py-6 flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Assingment_01"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://meghlab.github.io/Assingment_01/"
                  className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
                <Link to={'/details5'}>
                  <button className='btn bg-hoverprimary hover:bg-btnprimary border-none text-white '>
                    view Details
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
