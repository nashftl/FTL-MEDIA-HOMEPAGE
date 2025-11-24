import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Services = () => {
  const { ref: servicesRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="bg-black text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Services That Drive Results</h2>
        <p className="text-lg text-gray-300 mb-12">
          Specialized web solutions across four key areas, each designed to meet
          unique industry needs.
        </p>

        {/* Services Grid */}
        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Music Services Card */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <img src="/src/assets/images/services/music.svg" alt="Music Icon" className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Music</h3>
            <p className="text-gray-400 mb-4">
              Audio production tools, streaming platforms, and music management
              systems tailored for artists and producers.
            </p>
            <ul className="text-left text-gray-500 space-y-2">
              <li>• Audio Processing</li>
              <li>• Streaming Integration</li>
              <li>• Music Analytics</li>
              <li>• Artist Portfolios</li>
            </ul>
          </div>

          {/* Utility Services Card */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <img src="/src/assets/images/services/utility.svg" alt="Utility Icon" className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Utility</h3>
            <p className="text-gray-400 mb-4">
              Practical web applications and tools that solve everyday problems
              and improve productivity.
            </p>
            <ul className="text-left text-gray-500 space-y-2">
              <li>• Automation Tools</li>
              <li>• Data Processing</li>
              <li>• API Integration</li>
              <li>• Custom Calculators</li>
            </ul>
          </div>

          {/* Web Design Services Card */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <img src="/src/assets/images/services/web_design.svg" alt="Web Design Icon" className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Web Design</h3>
            <p className="text-gray-400 mb-4">
              Beautiful, responsive websites that capture your brand essence and
              engage your audience.
            </p>
            <ul className="text-left text-gray-500 space-y-2">
              <li>• Responsive Design</li>
              <li>• UI/UX Design</li>
              <li>• Brand Identity</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>

          {/* Small Business Services Card */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <img src="/src/assets/images/services/small_business.svg" alt="Small Business Icon" className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Small Business</h3>
            <p className="text-gray-400 mb-4">
              Complete digital solutions for small businesses, from e-commerce
              to customer management.
            </p>
            <ul className="text-left text-gray-500 space-y-2">
              <li>• E-commerce Platforms</li>
              <li>• CRM Systems</li>
              <li>• Booking Systems</li>
              <li>• Business Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

