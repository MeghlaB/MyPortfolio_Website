import React from "react";
import html from "../../src/assets/icons/html.jpeg";
import css from "../../src/assets/icons/css.png";
import react from "../../src/assets/icons/react.png";
import tailwind from "../../src/assets/icons/tailwind.png";
import mongodb from "../../src/assets/icons/mongodb.png";
import js from "../../src/assets/icons/js.png";
import node from "../../src/assets/icons/download (4).png";
import express from "../../src/assets/icons/download (2).png";
import git from "../../src/assets/icons/download (3).png";
import vscode from "../../src/assets/icons/download (5).jpeg";
import github from "../../src/assets/icons/download (5).png";
import figma from "../../src/assets/icons/download (6).jpeg";

const skillsData = {
  Frontend: [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React.js", icon: react },
    { name: "Tailwind CSS", icon: tailwind },
  ],
  Backend: [
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: express },
    { name: "MongoDB", icon: mongodb },
  ],
  Tools: [
    { name: "Git", icon: git },
    { name: "VS Code", icon: vscode },
    { name: "Github", icon: github },
    { name: "Figma", icon: figma },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-hoverprimary mt-6 mb-6">
          My Skills
          <div className="mt-3 w-32 mx-auto border-t-4 border-hoverprimary"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="border border-gray-700 hover:border-purple-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-hoverprimary mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center border border-gray-700 hover:border-purple-700 p-4 rounded-lg shadow-md transition-colors"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
