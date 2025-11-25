import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="home" className="bg-white dark:bg-black text-black dark:text-white py-20">
      <div 
        ref={heroRef}
        className={`container mx-auto flex flex-col md:flex-row items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Hero Content (Text and Buttons) */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Available for new projects
          </p>
          <h1 className="text-5xl font-bold mb-4">
            Professional Web Services for Every Need
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            From music production tools to business websites, I create digital
            solutions that elevate your brand and streamline your workflow with
            cutting-edge technology.
          </p>
          {/* Call to Action Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a 
              href="#portfolio"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              View My Work
            </a>
            <a 
              href="#services"
              className="border border-black dark:border-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 active:scale-95"
            >
              Explore Services
            </a>
          </div>
          {/* Key Statistics */}
          <div className="flex justify-center md:justify-start space-x-12 mt-12" aria-label="Key Statistics">
            <h2 className="sr-only">Key Statistics</h2>
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-3xl font-bold">4</p>
              <p className="text-gray-600 dark:text-gray-400">Service Categories</p>
            </div>
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 px-4">
          <img
            src="/src/assets/images/hero-image.jpg"
            alt="Web Services Portfolio Showcase"
            className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
            width="600"
            height="400"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

