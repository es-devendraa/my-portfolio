// src/components/Hero.jsx

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// The component now receives the 'onNavigate' function as a prop from App.jsx
const Hero = ({ onNavigate }) => {
  return (
    // We add 'pt-20' (padding-top) to push content down below the fixed navbar
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="text-center p-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
          Hi, I'm <span className="text-blue-600">Devendra Patel</span>
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-gray-600">
          I'm a Frontend Developer.
        </p>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/es-devendraa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/es-devendra/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a href="https://twitter.com/es_devendraa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FaTwitter size={32} />
          </a>
        </div>

        {/* Call-to-action buttons */}
        <div className="mt-8 flex justify-center gap-4">
          {/* This is now a button that calls onNavigate to switch views */}
          <button 
            onClick={() => onNavigate('projects')} 
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            View My Work
          </button>
          <a 
            href="/resume.pdf"
            download="DevendraPatel-Resume.pdf"
            className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
