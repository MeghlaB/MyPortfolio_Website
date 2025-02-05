
import React from 'react'
import project5 from '../../src/assets/Projects/project00.png'
import { FaGithub, FaLink } from 'react-icons/fa'

function CowDetails() {
  return (
    <div className='p-6 md:p-28 mainBg'>
      {/* Project Details */}
      <div className="flex flex-col bg-[#1F1F38] shadow-xl text-white/75 border-hoverprimary border rounded p-6 my-10 mx-auto max-w-full sm:max-w-4xl space-y-6">
        <div className="w-full">
          <img className="w-full rounded-lg" src={project5} alt="CrowedCub" />
        </div>

        {/* Tech Stack */}
        <div className="flex gap-3 m-5 flex-wrap">
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">React.js</div>
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">Tailwind CSS</div>
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">daisyUI</div>
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">Node.js</div>
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">MongoDB</div>
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">Express.js</div>
        </div>

        {/* Project Overview */}
        <div>
          <h2 className="text-3xl font-bold mb-4">CrowedCub</h2>
          <p className="flex items-center gap-2 text-xl mb-2">
            CrowedCub is a crowdfunding platform empowering communities by enabling seamless fundraising and donation opportunities for impactful campaigns. It bridges the gap between donors and recipients for personal needs, creative ideas, startups, and more, fostering meaningful connections and inspiring change.
          </p>

        
          
        </div>

        {/* Potential Improvements and Future Plans */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Potential Improvements and Future Plans</h1>
          <ul>
            <li>- Add real-time updates for campaign statuses</li>
            <li>- Implement more advanced filtering and sorting options for campaigns</li>
            <li>- Improve user profiles with additional customization options</li>
            <li>- Add a payment gateway for direct donations</li>
            <li>- Expand to mobile app development for better accessibility</li>
          </ul>
        </div>

        {/* Challenges Faced */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Challenges Faced During Development</h1>
          <ul>
            <li>- Ensuring data consistency between front-end and back-end</li>
            <li>- Handling authentication and authorization effectively for different user roles</li>
            <li>- Optimizing performance for handling large numbers of campaigns and donations</li>
            <li>- Managing real-time updates and notifications for users</li>
            <li>- Debugging cross-browser compatibility issues</li>
          </ul>
        </div>

        {/* Project Links */}
        <div className="card-actions flex justify-end gap-4">
          <a
            href="https://github.com/MeghlaB/CrowedCub"
            className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href=" https://assignment-10tulip.web.app/"
            className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CowDetails
