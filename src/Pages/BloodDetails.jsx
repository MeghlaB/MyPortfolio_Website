import React from 'react'
import project1 from '../../src/assets/Projects/Capture.png'
import { FaGithub, FaLink } from 'react-icons/fa'
export default function BloodDetails() {
  return (
    <div>
       <div className='p-6 md:p-28 mainBg'>
            {/* projects1 */}
            <div className="flex flex-col bg-[#1F1F38] shadow-xl text-white/75 border-green-500 border rounded p-6 my-10 mx-auto max-w-full sm:max-w-4xl space-y-6">
              <div className="w-full">
                <img className="w-full rounded-lg" src={project1} alt="Campaign" />
              </div>
      
              <div className="flex gap-3 m-5 flex-wrap">
                <div className="badge badge-outline hover:bg-green-600 hover:text-white">
                  React.js
                </div>
                <div className="badge badge-outline hover:bg-green-600  hover:text-white">
                  Tailwind CSS
                </div>
                <div className="badge badge-outline hover:bg-green-600 hover:text-white">
                  daisyUI
                </div>
                <div className="badge badge-outline hover:bg-green-600 hover:text-white">
                  Node.js
                </div>
                <div className="badge badge-outline hover:bg-green-600 hover:text-white">
                  MongoDB
                </div>
                <div className="badge badge-outline hover:bg-green-600 hover:text-white">
                  Express.js
                </div>
              </div>
      
              <div>
                <h2 className="text-3xl font-bold mb-4">Blood Donation🩸</h2>
                <p className="flex items-center gap-2 text-xl mb-2">
                The Blood Donation Application is designed to streamline the process of blood donation by connecting donors, volunteers, and recipients efficiently. As a volunteer, your role is crucial in managing donation requests and assisting with content creation while ensuring a smooth workflow within the platform.
                </p>
      
                {/* Challenges Faced */}
                <div>
                  <h1 className="text-2xl font-bold mb-4">Challenges Faced</h1>
                  <ul>
                    <li>- Handling real-time status updates for donation requests (Pending → In Progress → Done) efficiently was challenging.</li>
                    <li>- Managing role-based access control (Donor, Volunteer, Admin) while ensuring secure authentication via Firebase and JWT was complex.</li>
                    <li>- Using React Query helped minimize unnecessary API requests.
                    </li>
                    <li>- Although @tanstack/react-query helped optimize data fetching, implementing WebSockets or Firebase Realtime Database could improve real-time interactions.</li>
                  </ul>
                </div>
      
                {/* Potential Improvements and Future Plans */}
                <div>
                  <h1 className="text-2xl font-bold mb-4">Potential Improvements and Future Plans</h1>
                  <ul>
                    <li>- Implement real-time push notifications (using Firebase Cloud Messaging) for updates like donation status changes, blog posts, and user interactions.</li>
                    <li>- Implement real-time push notifications (using Firebase Cloud Messaging) for updates like donation status changes, blog posts, and user interactions.</li>
                    <li>- Add a rating and review system where donors and volunteers can be rated to build trust and credibility.</li>
                    <li>- Currently using Stripe, but integrating bKash/Nagad/Rocket would make it easier for users in Bangladesh to donate.</li>
                    <li>- Use AI-based recommendations to match donors with recipients based on location and blood group.</li>
                   
                  </ul>
                </div>
      
              </div>
      
              <div className="card-actions flex justify-end gap-4">
                <a
                  href="https://github.com/MeghlaB/Blood-Donation"
                  className="text-xl btn flex items-center gap-2 hover:bg-green-500  text-white bg-green-500 border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://blood-donation-6ebb1.web.app"
                  className="text-xl btn flex items-center gap-2  hover:bg-green-500  text-white bg-green-500  b border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
    </div>
  )
}
