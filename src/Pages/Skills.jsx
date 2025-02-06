
import React from "react";
import html from "../../src/assets/icons/html.jpeg";
import css from "../../src/assets/icons/css.png";
import react from "../../src/assets/icons/react.png";
import tailwind from "../../src/assets/icons/tailwind.png";
import mongodb from "../../src/assets/icons/mongodb.png";
import js from "../../src/assets/icons/js.png";
import node from "../../src/assets/icons/download (4).png";
import express from "../../src/assets/icons/download (2).png";
import git from "../../src/assets/icons//download (3).png";
import vscode from "../../src/assets/icons/download (5).jpeg";

const skillsData = {
  Frontend: [
    { name: "HTML", icon: html, level: 90 },
    { name: "CSS", icon: css, level: 85 },
    { name: "JavaScript", icon: js, level: 80 },
    { name: "React.js", icon: react, level: 85 },
    { name: "Tailwind CSS", icon: tailwind, level: 90 },
  ],
  Backend: [
    { name: "Node.js", icon: node, level: 75 },
    { name: "Express.js", icon: express, level: 70 },
    { name: "MongoDB", icon: mongodb, level: 80 },
  ],
  Tools: [
    { name: "Git", icon: git, level: 85 },
    { name: "VS Code", icon: vscode, level: 90 },
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
            <div key={category} className="bg-[#1F1F38] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-hoverprimary mb-4">
                {category}
              </h3>
              {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-hoverprimary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
