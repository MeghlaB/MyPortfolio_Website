import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import project4 from '../../src/assets/Projects/project00.png'
import project5 from '../../src/assets/Projects/project.png'
import project1 from '../../src/assets/Projects/Capture.png'

import { Link } from "react-router-dom";

export default function Project() {
  return (
    <section id="projects" className="py-32 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Corrected h2 tag */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-500 mt-6 mb-6">
         Project
          </h2>
         
        </div>

        <div className="grid grid-cols-1 h-full px-3 md:px-2 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          {/* Project Card Example */}
          <div className="card border border-green-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project1}
                alt="Project Name"
                className="rounded-xl object-cover w-80"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-xl font-bold text-white">
              Blood Donation🩸
              </h2>
              <p className="text-white/75 text-left">
              he Blood Donation Application is designed to streamline the process of blood donation by connecting donors, volunteers, and recipients efficiently....
              </p>
              <div className="card-actions py-6 flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Blood-Donation"
                  className="text-xl btn flex items-center gap-2 bg-green-600 border-none transition-all duration-200 px-4 py-2 rounded-lg shadow text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://blood-donation-6ebb1.web.app"
                  className="text-xl btn flex items-center gap-2 bg-green-600 border-none transition-all duration-200 px-4 py-2 rounded-lg shadow text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
                <Link to={'/bloodDetails'}>
                  <button className="btn bg-green-600 hover:bg-green-500 border-none text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* project -2 */}
          <div className="card border border-green-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project5}
                alt="Project Name"
                className="rounded-xl object-cover w-80"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-xl font-bold text-white">
              Lost Of Items
              </h2>
              <p className="text-white/75 text-left">
              WhereIsIt is a platform designed to connect individuals who have lost personal belongings with those who have found them.........
              </p>
              <div className="card-actions py-6 flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/Lost_of_Items"
                  className="text-xl btn flex items-center gap-2 bg-green-600 border-none transition-all duration-200 px-4 py-2 rounded-lg shadow text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://assingment11lostfound.web.app"
                  className="text-xl btn flex items-center gap-2 bg-green-600 border-none transition-all duration-200 px-4 py-2 rounded-lg shadow text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
                <Link to={'/lostDetails'}>
                  <button className="btn bg-green-600 hover:bg-gren-500 border-none text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* End of Project Card */}
          <div className="card border border-green-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src={project4}
                alt="Project Name"
                className="rounded-xl object-cover w-80"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-xl font-bold text-white">
              CrowedCub
              </h2>
              <p className="text-white/75 text-left">
              CrowedCub is a crowdfunding platform empowering communities by enabling seamless fundraising and donation opportunities for impactful campaigns...
              </p>
              <div className="card-actions py-6 flex justify-center gap-4">
                <a
                  href="https://github.com/MeghlaB/CrowedCub"
                  className="text-xl btn flex items-center gap-2 bg-green-600 border-none transition-all duration-200 px-4 py-2 rounded-lg shadow text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://assignment-10tulip.web.app/"
                  className="text-xl btn flex items-center gap-2 bg-green-600 border-none transition-all duration-200 px-4 py-2 rounded-lg shadow text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
                <Link to={'/cowDetails'}>
                  <button className="btn bg-green-600 hover:bg-green-500 border-none text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
