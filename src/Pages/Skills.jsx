import React from 'react'
import html from '../../src/assets/icons/html.jpeg'

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-hoverprimary mb-6">My Skills 
        <div className=" mt-3 w-32 mx-auto border-t-4 border-hoverprimary"></div>
        </h2>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img src={html} alt="" className='text-left w-24' />
            <h3 className="text-2xl font-semibold text-btnprimary mb-4">HTML5</h3>
            <p className="text-white">Expert in creating semantic, well-structured web pages with SEO-friendly practices and accessibility in mind.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-btnprimary mb-4">CSS3</h3>
            <p className="text-white">Mastery in crafting responsive, pixel-perfect layouts using Flexbox, Grid, and modern CSS techniques.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-btnprimary mb-4">Tailwind CSS</h3>
            <p className="text-white">Proficient in building fast, responsive UIs with Tailwind CSS, enabling rapid development with a utility-first approach.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-btnprimary mb-4">React.js</h3>
            <p className="text-white">Experienced in building dynamic, performant React applications with state management, hooks, and component-based architecture.</p>
          </div>

          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-btnprimary mb-4">MongoDB</h3>
            <p className="text-white">Solid knowledge in working with MongoDB, ensuring efficient data storage, retrieval, and management for scalable applications.</p>
          </div>

         
        </div>
      </div>
    </section>
  )
}
