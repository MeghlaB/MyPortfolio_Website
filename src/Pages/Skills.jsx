import React from "react";

const skills = [
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React.js", percentage: 80 },
  { name: "Tailwind CSS", percentage: 85 },
  { name: "Node.js", percentage: 75 },
  { name: "Express.js", percentage: 70 },
  { name: "MongoDB", percentage: 70 },
  { name: "Git", percentage: 80 },
  { name: "VS Code", percentage: 90 },
  { name: "Github", percentage: 85 },
  { name: "Figma", percentage: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 text-white">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6 relative inline-block text-green-600">
          My Skills
          
        </h2>
        <p className="text-gray-400 mb-12">
          I have learned and practiced a variety of tools and technologies for modern web development. Below are some of my core technical skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-left">{skill.name}</span>
                <span className="text-right">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
