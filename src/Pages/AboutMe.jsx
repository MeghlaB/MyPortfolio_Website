import React from 'react';
import coding from '../../src/assets/coding.jpeg';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import { FaCode, FaPaintBrush, FaFootballBall } from "react-icons/fa"; 
import { FiMail } from 'react-icons/fi';
import { Helmet } from 'react-helmet';


export default function AboutMe() {
    return (
        <section className="py-16 pb-6">
        
            <div className="container mx-auto px-6 mt-4 max-w-full">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-hoverprimary mb-8">
                    About Me
                    <div className=" mt-3 w-32 mx-auto border-t-4 border-hoverprimary"></div>
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Column: Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 px-4">
                        <p className="text-lg text-white mb-6 leading-relaxed">
                            Hi, I'm <strong>Meghla Biswas</strong>, a passionate <strong>Frontend Developer</strong> from Bangladesh. With a deep interest in technology, I began my programming journey during college with HTML and CSS, later discovering my love for <strong>React</strong> which has shaped my career path.
                        </p>

                        <p className="text-lg text-white mb-6 leading-relaxed">
                            I specialize in creating interactive, user-friendly, and visually engaging websites that solve real-world problems. The process of transforming ideas into functional digital solutions drives my passion. I strive to deliver experiences that are not only efficient but also leave a lasting impression.
                        </p>

                        <p className="text-lg text-white mb-6 leading-relaxed">
                            Outside of coding, I'm passionate about digital art and enjoy experimenting with creative designs. I also play football to maintain a healthy balance between work and life, which fuels my creativity.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex gap-6 mt-6 lg:mt-4 justify-center lg:justify-start">
                            <a href="https://mail.google.com/mail/u/3/#inbox" className="text-2xl text-white hover:text-hoverprimary">
                                <FiMail />
                            </a>
                            <a href="https://www.facebook.com/onu.biswas.166205" className="text-2xl text-white hover:text-hoverprimary">
                                <FaFacebook />
                            </a>
                            <a href="https://github.com/MeghlaB" className="text-2xl text-white hover:text-hoverprimary">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Picture */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
                        <img
                            src={coding}
                            alt="Meghla Biswas"
                            className="w-80 h-80 object-cover rounded-lg shadow-xl border-4 border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-btnprimary hover:border-8"
                        />
                    </div>
                </div>

                {/* Additional Interests Section */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-16 mt-16">
                    <div className="text-center p-8 border rounded-lg shadow-lg w-80 hover:shadow-xl transition-all duration-300">
                        <FaCode className="text-4xl text-btnprimary" />
                        <h4 className="text-xl mt-4 font-semibold text-white">Programming</h4>
                        <p className="text-white mt-4">I enjoy solving complex problems, writing clean code, and bringing innovative ideas to life through technology. Coding is both a challenge and a passion.</p>
                    </div>

                    <div className="text-center p-8 border rounded-lg shadow-lg w-80 hover:shadow-xl transition-all duration-300">
                        <FaPaintBrush className="text-4xl text-btnprimary" />
                        <h4 className="text-xl mt-4 font-semibold text-white">Design & Creativity</h4>
                        <p className="text-white mt-4">Exploring digital art and design allows me to express my creativity. I enjoy blending art with technology to create visually appealing experiences.</p>
                    </div>
                </div>

                {/* Future Plans Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-center text-white mb-8">Future Plans
                        <div className=" mt-3 w-32 mx-auto border-t-4 border-hoverprimary"></div>
                    </h3>

                    <p className="text-lg text-white text-center">
                        I am eager to expand my expertise by exploring Full Stack Development and contributing to open-source projects. My ultimate goal is to build applications that not only serve a purpose but also connect people and make a positive impact on society.
                    </p>
                </div>
            </div>
        </section>
    );
}
