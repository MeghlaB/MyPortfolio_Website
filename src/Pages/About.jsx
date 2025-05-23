import React from "react";
import coding from "../assets/web_meghla-removebg-preview.png";

export default function AboutMe() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-green-500 mb-8">
          About Me
          {/* <div className="mt-2 w-32 mx-auto border-t-4 border-hoverprimary"></div> */}
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Column: Text Content */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center ">
            <div className="animated-border-box w-80 h-80 mx-auto">
              <div className="animated-border-inner w-full h-full bg-[#191f36] rounded-lg overflow-hidden">
                <img
                  src={coding}
                  alt="Meghla Biswas"
                  className="w-full h-full object-cover rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
  

          {/* Right Column: Picture */}
                  <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <p className="text-lg text-white mb-6 leading-relaxed">
              Hi, I'm <strong className="text-green-500">Meghla Biswas</strong>,
              a passionate <strong>Frontend Developer</strong> from Bangladesh.
              I have always been fascinated by technology and its potential to
              change the world. My journey into programming began during my
              college years when I started learning HTML and CSS. Eventually, I
              found my true calling in <strong>React</strong> and have been
              hooked ever since.
            </p>

            <p className="text-lg text-white mb-6 leading-relaxed">
              As a developer, I love creating interactive, user-friendly, and
              visually appealing websites that solve real problems. The process
              of transforming an idea into a fully functional website excites
              me, and I strive to create experiences that leave a lasting
              impression on users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
