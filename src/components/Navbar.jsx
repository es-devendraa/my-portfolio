// src/components/Navbar.jsx

import React from 'react';

const Navbar = ({ activeSection, onNavigate }) => {
  
  const getLinkClass = (sectionName) => {
    return `
      px-4 py-2 rounded-md text-sm font-medium transition-colors
      ${activeSection === sectionName 
        ? 'bg-blue-600 text-white' 
        : 'text-gray-600 hover:bg-gray-200'
      }
    `;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Devendra Patel
        </h1>

        <div className="flex items-center space-x-4">
          <button onClick={() => onNavigate('home')} className={getLinkClass('home')}>
            Home
          </button>
          {/* New "About" button */}
          <button onClick={() => onNavigate('about')} className={getLinkClass('about')}>
            About
          </button>
          <button onClick={() => onNavigate('projects')} className={getLinkClass('projects')}>
            Projects
          </button>
          <button onClick={() => onNavigate('skills')} className={getLinkClass('skills')}>
            Skills
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
