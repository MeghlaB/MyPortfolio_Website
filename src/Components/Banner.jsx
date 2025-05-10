import React from "react";
import myImage from "../assets/web_meghla-removebg-preview.png";
import { FaFacebook, FaGithub, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { FiMail } from "react-icons/fi";

export default function Banner() {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-col-reverse lg:flex-row items-center gap-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/50">
          I'm <span className="text-green-700">Frontend </span>
          <span className="text-green-500">
            <Typewriter
              words={["Developer"]}
              loop={Infinity}
              cursor=""
              typeSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="text-base md:text-lg text-white mt-4 max-w-md mx-auto lg:mx-0">
          Hi, I'm Meghla Biswas, a Frontend Developer. I design responsive,
          visually appealing, and user-friendly websites to bring your ideas to life.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 lg:mt-4 justify-center lg:justify-start">
          <a
            href="https://mail.google.com/mail/u/3/#inbox"
            className="text-2xl text-white hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <FiMail />
          </a>
          <a
            href="https://www.facebook.com/onu.biswas.166205"
            className="text-2xl text-white hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/MeghlaB"
            className="text-2xl text-white hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        {/* Resume Download Button */}
        <div className="mt-6 flex justify-center lg:justify-start">
          <a
            href="https://drive.google.com/uc?export=download&id=1Ux8k7tijnD1x0MHhlDHy7nnLIojix9yV"
            className="px-6 py-3 flex items-center gap-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition duration-300"
            download
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="home-img mt-20 lg:mt-20">
        <div className="img-box w-full h-full">
          <div className="img-item">
            <img src={myImage} alt="Meghla Biswas" className="w-full h-full object-cover rounded-full mix-blend-lighten" />
          </div>
        </div>
      </div>
    </div>
  );
}
