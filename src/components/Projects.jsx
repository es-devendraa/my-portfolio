// src/components/Projects.jsx

import React from 'react';

// Your actual project data from your resume.
const projectData = [
  {
    title: "Full-Stack Realtor Website (MERN)",
    description: "Engineered and deployed a full-stack property listing platform using the MERN stack. Features a secure RESTful API with JWT-based authentication and a dynamic frontend.",
    imageUrl: "../realtorHome.png",
    liveLink: "https://flipr-fullstack-app.onrender.com/", // TODO: Add link to the live project on Render
    adminLink: "https://flipr-fullstack-app.onrender.com/admin",
    codeLink: "https://github.com/es-devendraa/flipr_fullstack-app"  // TODO: Add link to the GitHub repo
  },
  {
    title: "Movie Recommender System",
    description: "Developed a responsive UI with JavaScript, HTML, and CSS that consumes a Python/Flask backend via the Fetch API to display personalized movie recommendations.",
    imageUrl: "../recommenderSystem.png",
    liveLink: "https://project1-movie-recommendation.onrender.com/", // TODO: Add link to the live project
    codeLink: "https://github.com/es-devendraa/Project1---Movie-Recommendation"  // TODO: Add link to the GitHub repo
  },
  {
    title: "Full-Stack Payment System",
    description: "Completed as part of the 100xDevs training, this prototype demonstrates a full-stack payment system, showcasing skills in user authentication and database design.",
    imageUrl: "../my-points-app.png",
    liveLink: "#", // TODO: Add link to the live project
    codeLink: "https://github.com/es-devendraa/my-points-app"  // TODO: Add link to the GitHub repo
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-start gap-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                    Live Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition-colors">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;