import React from 'react';
import { Link } from 'react-router-dom';
import html from '../../src/assets/icons/html.jpeg';
import css from '../../src/assets/icons/css.png';
import react from '../../src/assets/icons/react.png';
import tailwind from '../../src/assets/icons/tailwind.png';
import mongodb from '../../src/assets/icons/mongodb.png';
import { Helmet } from 'react-helmet';

export default function Skills() {
  return (
    <section id="skills" className="py-16 text-white">
       <Helmet>
        <title>
          Portfolio || Skills
        </title>
          </Helmet>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-hoverprimary mb-6">
          My Skills
          <div className="mt-3 w-32 mx-auto border-t-4 border-hoverprimary"></div>
        </h2>

        <div className="grid grid-cols-1 h-full lg:h-[550px] px-3 md:px-2 lg:px-0 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-8">
          {/* HTML */}
          <div className="p-6 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 relative group overflow-hidden">
            <div className="flex items-center mb-4 z-10 relative">
              <img src={html} alt="HTML" className="w-12 h-12 mr-4" />
              <h3 className="ml-4 text-2xl font-semibold text-hoverprimary">HTML</h3>
            </div>
            <p className="text-gray-300 z-10 relative">
              Expert in creating semantic, well-structured web pages with SEO-friendly practices and accessibility in mind.
            </p>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-80 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-end justify-end">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 px-6 py-2 bg-hoverprimary text-white font-semibold rounded-lg shadow-md"
              >
                Read more
              </a>
            </div>
          </div>

          {/* CSS */}
          <div className="p-6 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 relative group overflow-hidden">
            <div className="flex items-center mb-4 z-10 relative">
              <img src={css} alt="CSS3" className="w-12 h-12 mr-4" />
              <h3 className="ml-4 text-2xl font-semibold text-hoverprimary">CSS3</h3>
            </div>
            <p className="text-gray-300 z-10 relative">
              Mastery in crafting responsive, pixel-perfect layouts using Flexbox, Grid, and modern CSS techniques.
            </p>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-80 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-end justify-end">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 px-6 py-2 bg-hoverprimary text-white font-semibold rounded-lg shadow-md"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="p-6 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 relative group overflow-hidden">
            <div className="flex items-center mb-4 z-10 relative">
              <img src={tailwind} alt="Tailwind CSS" className="w-12 h-12 mr-4" />
              <h3 className="ml-4 text-2xl font-semibold text-hoverprimary">Tailwind CSS</h3>
            </div>
            <p className="text-gray-300 z-10 relative">
              Proficient in building fast, responsive UIs with Tailwind CSS, enabling rapid development with a utility-first approach.
            </p>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-80 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-end justify-end">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 px-6 py-2 bg-hoverprimary text-white font-semibold rounded-lg shadow-md"
              >
                Read more
              </a>
            </div>
          </div>

          {/* React.js */}
          <div className="p-6 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 relative group overflow-hidden">
            <div className="flex items-center mb-4 z-10 relative">
              <img src={react} alt="React.js" className="w-12 h-12 mr-4" />
              <h3 className="ml-4 text-2xl font-semibold text-hoverprimary">React.js</h3>
            </div>
            <p className="text-gray-300 z-10 relative">
              Experienced in building dynamic, performant React applications with state management, hooks, and component-based architecture.
            </p>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-80 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-end justify-end">
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 px-6 py-2 bg-hoverprimary text-white font-semibold rounded-lg shadow-md"
              >
                Read more
              </a>
            </div>
          </div>

          {/* MongoDB */}
          <div className="p-6 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 relative group overflow-hidden">
            <div className="flex items-center mb-4 z-10 relative">
              <img src={mongodb} alt="MongoDB" className="w-12 h-12 mr-4" />
              <h3 className="ml-4 text-2xl font-semibold text-hoverprimary">MongoDB</h3>
            </div>
            <p className="text-gray-300 z-10 relative">
              Solid knowledge in working with MongoDB, ensuring efficient data storage, retrieval, and management for scalable applications.
            </p>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-80 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-end justify-end">
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 px-6 py-2 bg-hoverprimary text-white font-semibold rounded-lg shadow-md"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
