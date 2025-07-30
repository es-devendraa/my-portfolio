// src/components/About.jsx

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-6 py-20">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="md:w-1/3">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQELYG5Vmzyi5Q/profile-displayphoto-shrink_400_400/B4DZaVFA6fGcAk-/0/1746257846037?e=1756944000&v=beta&t=DiOLMO7GVGcva6tJ1o-ts4IZccmpJZTy9FP-2-sdIhM"
              alt="A professional headshot or a relevant graphic"
              className="rounded-full shadow-2xl w-64 h-64 mx-auto object-cover"
            />
          </div>

          {/* Text Content Column */}
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Hello! I'm Devendra, a frontend developer with a deep passion for
              creating beautiful, functional, and user-centered web
              applications. My journey into the world of code began with a
              fascination for how things work on the web, and it has since
              evolved into a full-fledged career.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I specialize in React and its ecosystem, but I'm always eager to
              learn new technologies to solve new challenges. I thrive on
              turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring the latest tech
              trends, contributing to open-source projects, or enjoying a good
              cup of coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
