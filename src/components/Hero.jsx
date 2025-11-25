import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import heroImage from "../assets/images/hero-image.jpg";

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="home" className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white py-20">
      <div 
        ref={heroRef}
        className={`container mx-auto flex flex-col md:flex-row items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Hero Content (Text and Buttons) */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Official Partner of FTL Radio
          </p>
          <h1 className="text-5xl font-bold mb-4">
            Marketing & Web Services for the Music Industry
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            FTL Media delivers cutting-edge marketing and web development solutions 
            tailored for artists, labels, and creative businesses. From music production 
            tools to e-commerce platforms, we bring your vision to life.
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
              <p className="text-gray-600 dark:text-gray-400">Projects Delivered</p>
            </div>
            <div className="transition-transform duration-300 hover:scale-110">
              <p className="text-3xl font-bold">FTL Radio</p>
              <p className="text-gray-600 dark:text-gray-400">Official Partner</p>
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
            src={heroImage}
            alt="Web Services Portfolio Showcase"
            className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
            width="600"
            height="400"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

