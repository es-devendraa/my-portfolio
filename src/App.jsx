// src/App.jsx

import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'home':
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    // The 'min-h-screen' class has been removed from this div to fix the empty space issue.
    <div className="bg-gray-100">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
