import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectImages } from "../assets/portfolio.js";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectImages.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Portfolio"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Portfolio{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-112 mx-auto">
        A visually captivating photography portfolio showcasing artistic
        compositions, high-quality imagery, and a keen eye for detail.
      </p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2 cursor-pointer"
          aria-label="Previous Portfolio"
        >
          <img src="src/assets/img/left.png" alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded cursor-pointer"
          aria-label="Next Portfolio"
        >
          <img src="src/assets/img/next-button.png" alt="Next" />
        </button>
      </div>

      {/* Portfolio slider container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-200 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectImages.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project}
                alt={`Project ${index + 1}`}
                className="w-full h-50 mb-14 rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/gallery")}
          className="px-6 py-3 bg-emerald-950 text-white rounded-md shadow-md hover:bg-emerald-700 transition"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Projects;
