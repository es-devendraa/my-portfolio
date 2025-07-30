// src/components/Skills.jsx

import React from 'react';

// A list of your skills. You can change these to match your own.
const skillsList = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  "JavaScript (ES6+)",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "Sass",
  "Firebase",
  "MongoDB",
  "Git & GitHub",
  "Webpack"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Skills
        </h2>

        {/* Container for the skills list */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {/* Map over the skillsList to create a badge for each skill */}
            {skillsList.map((skill, index) => (
              <div key={index} className="bg-white text-gray-800 font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;