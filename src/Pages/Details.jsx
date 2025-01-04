import React from 'react';
import project1 from '../../src/assets/Projects/5.png'





import { FaGithub, FaLink } from 'react-icons/fa'
import { FaLinkSlash } from 'react-icons/fa6'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'



export default function Details() {
  return (
<div className='p-6 md:p-28 mainBg'>
    {/* projects1 */}
  <div className="flex flex-col bg-[#1F1F38] shadow-xl text-white/75 border-hoverprimary border rounded p-6 my-10 mx-auto max-w-full sm:max-w-4xl space-y-6">
    <div className="w-full">
      <img className="w-full rounded-lg" src={project1} alt="Campaign" />
    </div>

    <div className="flex gap-3 m-5 flex-wrap">
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

    <div>
      <h2 className="text-3xl font-bold mb-4">Bpl Dream</h2>
      <p className="flex items-center gap-2 text-xl">
        This website is made for a Cricket Player bidding Company, named PLAYERHUNT. 
        *All information on this website is fetched locally in JSON format. It is built using REACT and VITE, so it has no loading and VITE comes with hot reloading..
        The website is divided into 3 parts: Navbar + Banner, Main Section, and Footer. The Navbar section has a Claim Free Credit button that allows the user to add some money to purchase the player.
      </p>
    </div>
    <div className="card-actions flex justify-end gap-4">
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
        <FaLink />
      </a>
    </div>
  </div>
  
</div>


  );
}
