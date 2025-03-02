import React from "react";
import { projectImages } from "../assets/portfolio.js";

const Gallery = () => {
  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 py-20">
      <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
        Full Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectImages.map((project, index) => (
          <div key={index} className="relative">
            <img
              src={project}
              alt={`Project ${index + 1}`}
              className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
