import React from 'react'
import project4 from '../../src/assets/Projects/project.png'
import { FaGithub, FaLink } from 'react-icons/fa'

function LostDetails() {
  return (
    <div className='p-6 md:p-28 mainBg'>
      {/* projects1 */}
      <div className="flex flex-col bg-[#1F1F38] shadow-xl text-white/75 border-hoverprimary border rounded p-6 my-10 mx-auto max-w-full sm:max-w-4xl space-y-6">
        <div className="w-full">
          <img className="w-full rounded-lg" src={project4} alt="Campaign" />
        </div>

        <div className="flex gap-3 m-5 flex-wrap">
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
            React.js
          </div>
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
            Tailwind CSS
          </div>
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
            daisyUI
          </div>
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
            Node.js
          </div>
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
            MongoDB
          </div>
          <div className="badge badge-outline hover:bg-hoverprimary hover:text-white">
            Express.js
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4"> Lost OF Items</h2>
          <p className="flex items-center gap-2 text-xl mb-2">
            WhereIsIt is a platform designed to connect individuals who have lost personal belongings with those who have found them. Users can report lost items by providing details such as item description, last seen location, and date of loss. Similarly, individuals who find lost items can list them on the platform with relevant details and images.
          </p>

          {/* Challenges Faced */}
          <div>
            <h1 className="text-2xl font-bold mb-4">Challenges Faced</h1>
            <ul>
              <li>- Handling real-time updates for lost/found items.</li>
              <li>- Implementing secure user authentication and authorization.</li>
              <li>- Structuring the database efficiently for lost/found item relationships.</li>
              <li>- Ensuring the platform is responsive on all devices.</li>
            </ul>
          </div>

          {/* Potential Improvements and Future Plans */}
          <div>
            <h1 className="text-2xl font-bold mb-4">Potential Improvements and Future Plans</h1>
            <ul>
              <li>- Implementing push notifications for real-time item updates and matches.</li>
              <li>- Adding a chat feature for users to directly communicate with one another.</li>
              <li>- Introducing a user rating/review system to promote trust among users.</li>
              <li>- Adding multi-language support to make the platform accessible to a larger audience.</li>
              <li>- Expanding the platform to include categories for different types of lost and found items (e.g., electronics, pets, etc.).</li>
              <li>- Introducing AI-based image recognition to identify items in uploaded images.</li>
            </ul>
          </div>

        </div>

        <div className="card-actions flex justify-end gap-4">
          <a
            href="https://github.com/MeghlaB/Lost_of_Items"
            className="text-xl btn flex items-center gap-2 hover:bg-btnprimary text-white/75 bg-hoverprimary border-none transition-all duration-200 px-4 py-2 rounded-lg shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href=" https://assingment11lostfound.web.app"
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

export default LostDetails
