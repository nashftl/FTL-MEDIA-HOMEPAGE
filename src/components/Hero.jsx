import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm font-semibold text-gray-400 mb-2">
            Available for new projects
          </p>
          <h1 className="text-5xl font-bold mb-4">
            Professional Web Services for Every Need
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            From music production tools to business websites, I create digital
            solutions that elevate your brand and streamline your workflow with
            cutting-edge technology.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold">
              View My Work
            </button>
            <button className="border border-white px-6 py-3 rounded-md font-semibold">
              Explore Services
            </button>
          </div>
          <div className="flex justify-center md:justify-start space-x-12 mt-12">
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4</p>
              <p className="text-gray-400">Service Categories</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/src/assets/images/hero-image.jpg"
            alt="Web Services"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
