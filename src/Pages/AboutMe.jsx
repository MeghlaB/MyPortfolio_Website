import React from 'react';
import coding from '../assets/web_meghla-removebg-preview.png'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import { FaCode, FaPaintBrush, FaFootballBall } from "react-icons/fa"; 
import { FiMail } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

export default function AboutMe() {
    return (
        <section className="py-28 pb-6">
        
            <div className="container mx-auto px-6 mt-4 max-w-full">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-green-500 mb-8">
                    About Me
                    <div className=" mt-3 w-32 mx-auto border-t-4 border-green-500"></div>
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Column: Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 px-4">
                        <p className="text-lg text-white mb-6 leading-relaxed">
                            Hi, I'm <strong className='text-green-500'>Meghla Biswas</strong>, a passionate <strong>Frontend Developer</strong> from Bangladesh. My journey in programming began during my college years when I first encountered HTML and CSS. It was then that I realized the power of code to transform ideas into reality. Over time, my passion for web development grew, especially with the discovery of <strong>React</strong>, which became the core of my development work.
                        </p>

                        <p className="text-lg text-white mb-6 leading-relaxed">
                            I love creating dynamic, interactive, and visually appealing websites that make a difference. The process of turning abstract ideas into functional solutions excites me. I am always learning and improving to build experiences that are both user-friendly and impactful.
                        </p>

                        <p className="text-lg text-white mb-6 leading-relaxed">
                            Outside of coding, I am deeply passionate about digital art and love experimenting with design. I also play football to maintain a healthy balance between work and life, which fuels my creativity and keeps me motivated.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex gap-6 mt-6 lg:mt-4 justify-center lg:justify-start">
                            <a href="https://mail.google.com/mail/u/3/#inbox" className="text-2xl text-white hover:text-green-500">
                                <FiMail />
                            </a>
                            <a href="https://www.facebook.com/onu.biswas.166205" className="text-2xl text-white hover:text-green-500">
                                <FaFacebook />
                            </a>
                            <a href="https://github.com/MeghlaB" className="text-2xl text-white hover:text-green-500">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Picture */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
                        <img
                            src={coding}
                            alt="Meghla Biswas"
                            className="w-80 h-80 object-cover rounded-lg shadow-xl border-42 border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-600gu
                         hover:border-4"
                        />
                    </div>
                </div>

               <div className=' flex flex-col lg:flex-row justify-center items-center gap-16 mt-16'>
                 {/* Programming Journey Section */}
                 <div className="mt-16 max-w-xl mx-auto border py-4 px-4 border-gray-700  hover:border-green-700">
                    <h3 className="text-2xl font-semibold text-center text-white mb-8">My Programming Journey
                        <div className=" mt-3 w-32 mx-auto border-t-4 border-green">

                        </div>
                    </h3>

                    <p className="text-lg text-left text-white ">
                        My programming journey started in college, where I learned the basics of web development with HTML and CSS. I was fascinated by how a few lines of code could transform into a visually appealing web page. As I dived deeper into the world of development, I discovered JavaScript and React, which fueled my passion for creating dynamic, interactive web applications. Since then, I’ve constantly been honing my skills to build efficient, responsive, and user-centric websites.
                    </p>
                </div>

                {/* The Type of Work You Enjoy Section */}
                <div className="mt-16 max-w-xl mx-auto border py-4 px-4 border-gray-700 hover:border--700">
                    <h3 className="text-2xl font-semibold text-center text-white mb-8">The Type of Work I Enjoy
                        <div className=" mt-3 w-32 mx-auto border-t-4 border-green-500"></div>
                    </h3>

                    <p className="text-lg text-white text-left">
                        I enjoy working on projects that challenge me to solve complex problems and think creatively. My focus is on building interactive, responsive, and visually engaging websites using technologies like React.js. I thrive when working on user-centered design, where the user experience is a priority, and I find joy in collaborating with designers, developers, and other team members to bring innovative ideas to life.
                    </p>
                </div>
               </div>

                {/* Additional Interests Section */}
               <div>
               <h3 className="text-2xl  mt-6 font-semibold text-center text-white mb-8">My Hobbies
                        <div className=" mt-3 w-32 mx-auto border-t-4 border-green-500">
                            
                        </div>
                    </h3>
               <div className="flex flex-col lg:flex-row justify-center items-center gap-16 mt-16 ">
                
                <div className="text-center p-8 border border-gray-700  hover:border-green-700 rounded-lg shadow-lg w-80 hover:shadow-xl transition-all duration-300">
                    <FaCode className="text-4xl text-green-600" />
                    <h4 className="text-xl mt-4 font-semibold text-white">Programming</h4>
                    <p className="text-white mt-4">I enjoy solving complex problems, writing clean code, and bringing innovative ideas to life through technology. Coding is both a challenge and a passion.</p>
                </div>

                <div className="text-center p-8 hover:border-green-700 border border-gray-700 rounded-lg shadow-lg w-80 hover:shadow-xl transition-all duration-300">
                    <FaPaintBrush className="text-4xl text-green-600" />
                    <h4 className="text-xl mt-4 font-semibold text-white">Design & Creativity</h4>
                    <p className="text-white mt-4">Exploring digital art and design allows me to express my creativity. I enjoy blending art with technology to create visually appealing experiences.</p>
                </div>
 </div>
               </div>

                {/* Future Plans Section */}
                <div className="mt-16  max-w-xl mx-auto border border-gray-700 hover:border-green-700 p-4 ">
                    <h3 className="text-2xl font-semibold text-center text-white mb-8">Future Plans
                        <div className=" mt-3 w-32 mx-auto border-t-4 border-green-600"></div>
                    </h3>

                    <p className="text-lg text-white text-center">
                        I am eager to expand my expertise by exploring Full Stack Development and contributing to open-source projects. My ultimate goal is to build applications that not only serve a purpose but also connect people and make a positive impact on society.
                    </p>
                </div>
            </div>
        </section>
    );
}
