// src/components/Navbar.jsx

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ activeSection, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = (section) => {
    onNavigate(section);
    setMenuOpen(false); // auto-close menu on mobile
  };

  const getLinkClass = (sectionName) =>
    `block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      activeSection === sectionName
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Devendra Patel</h1>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-4">
          {['home', 'about', 'projects', 'skills'].map((sec) => (
            <button
              key={sec}
              onClick={() => handleNavClick(sec)}
              className={getLinkClass(sec)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {['home', 'about', 'projects', 'skills'].map((sec) => (
            <button
              key={sec}
              onClick={() => handleNavClick(sec)}
              className={getLinkClass(sec)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
