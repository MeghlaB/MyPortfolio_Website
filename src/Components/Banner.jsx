import React from "react";
import myImage from "../assets/web_meghla-removebg-preview.png";
import {
  FaFacebook,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="h-[650px] flex items-center justify-center pt-60 lg:pt-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-white/50">
            I'm <span className="text-hoverprimary">Frontend </span>
            <span className="text-btnprimary">
              <Typewriter
                words={["Developer"]}
                loop={Infinity}
                cursor=""
                typeSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-white mt-4 max-w-md mx-auto lg:mx-0">
            Hi, I'm Meghla Biswas, a Frontend Developer. I design responsive,
            visually appealing, and user-friendly websites to bring your ideas to life.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 lg:mt-4 justify-center lg:justify-start">
            <a
              href="https://mail.google.com/mail/u/3/#inbox"
              className="text-2xl text-white hover:text-hoverprimary"
              target="_blank"
              rel="noreferrer"
            >
              <FiMail />
            </a>
            <a
              href="https://www.facebook.com/onu.biswas.166205"
              className="text-2xl text-white hover:text-hoverprimary"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/MeghlaB"
              className="text-2xl text-white hover:text-hoverprimary"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          {/* Download Resume Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="https://drive.google.com/uc?export=download&id=1Ux8k7tijnD1x0MHhlDHy7nnLIojix9yV"
              className="px-6 py-3 flex items-center gap-3 bg-hoverprimary text-white rounded-lg shadow-md hover:bg-btnprimary transition duration-300"
              download
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center pt-6 lg:pt-28">
          <motion.img
            src={myImage}
            alt="Developer"
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-lg border-4 border-gray-600 hover:border-purple-700 transition-all duration-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
