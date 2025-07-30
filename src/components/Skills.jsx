// src/components/Skills.jsx

import React from 'react';

// A list of your skills (no changes here).
const skillsList = [
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "Express.js",
  "Python",
  "SQL",
  "MongoDB",
  "Mongoose",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git & GitHub",
  "RESTful APIs",
  "JWT Authentication"
];

// We've changed this from a simple list to an array of objects.
// This lets us add more details like the issuer and a link.
const certificationsList = [
    {
        name: "AI Engineer",
        issuer: "United Latino Students Association",
        link: "https://oneroadmap.io/skills/ai/certificate/CERT-0515017C" // TODO: Add the direct link to your certificate
    },
    {
        name: "Programming in Java",
        issuer: "NPTEL",
        link: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS57S114720000504399887" // TODO: Add the direct link to your certificate
    },
    {
        name: "Frontend Development",
        issuer: "United Latino Students Association",
        link: "https://oneroadmap.io/skills/frontend/certificate/CERT-B6D3B8AB" // TODO: Add the direct link to your certificate
    },
    // You can add more certificate objects here
    // {
    //     name: "Another Certification",
    //     issuer: "Another Issuer",
    //     link: "#"
    // }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Technical Skills Section (no changes here) */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Technical Skills
        </h2>
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-wrap justify-center gap-4">
            {skillsList.map((skill, index) => (
              <div key={index} className="bg-white text-gray-800 font-semibold py-2 px-5 rounded-lg shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section - Now using a card layout */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Certifications & Training
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsList.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
              <p className="text-md text-gray-600 mt-1 mb-4">Issued by: {cert.issuer}</p>
              <div className="mt-auto">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
