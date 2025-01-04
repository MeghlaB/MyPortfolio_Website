import React from 'react'
import project2 from '../../src/assets/Projects/4.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
export default function Details1() {
  return (
    <div className='p-6 md:p-28 mainBg'>
        {/* projects2 */}
  <div className="flex flex-col bg-[#1F1F38] shadow-xl text-white/75 border-hoverprimary border rounded p-6 my-10 mx-auto max-w-full sm:max-w-4xl space-y-6">
    <div className="w-full">
      <img className="w-full rounded-lg" src={project2} alt="Campaign" />
    </div>

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

    <div>
      <h2 className="text-3xl font-bold mb-4">Pet Adoption PlatForm</h2>
      <p className="flex items-center gap-2 text-xl">
      The Website is made for a pet adoption platform named PEDDY.
      Each adoptable pet will have a comprehensive and detailed profile, including their breed, age, size, temperament, health status, and multiple high-quality photos, so that potential adopters can make well-informed and thoughtful decisions. The platform also offers a user-friendly interface, allowing adopters to search for pets based on their preferences, including specific breeds, sizes, and other criteria. Additionally, PETTY ensures that every pet listed is up-to-date with vaccinations and health checks to guarantee the well-being of both the animals and their future families.
      </p>
    </div>
    <div className="card-actions flex justify-end gap-4">
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
    </div>
  </div>
    </div>
  )
}
