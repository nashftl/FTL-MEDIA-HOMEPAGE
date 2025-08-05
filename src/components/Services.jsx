import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Services That Drive Results</h2>
        <p className="text-lg text-gray-300 mb-12">
          Specialized web solutions across four key areas, each designed to meet
          unique industry needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Music Services Card */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="flex justify-center mb-4">
              <img src="/src/assets/images/services/music.svg" alt="Music Icon" className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Music</h3>
            <p className="text-gray-200 mb-4">
              Audio production tools, streaming platforms, and music management
              systems tailored for artists and producers.
            </p>
            <ul className="text-left text-gray-300 space-y-2">
              <li>• Audio Processing</li>
              <li>• Streaming Integration</li>
              <li>• Music Analytics</li>
              <li>• Artist Portfolios</li>
            </ul>
          </div>

          {/* Utility Services Card */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="flex justify-center mb-4">
              <img src="/src/assets/images/services/utility.svg" alt="Utility Icon" className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Utility</h3>
            <p className="text-gray-200 mb-4">
              Practical web applications and tools that solve everyday problems
              and improve productivity.
            </p>
            <ul className="text-left text-gray-300 space-y-2">
              <li>• Automation Tools</li>
              <li>• Data Processing</li>
              <li>• API Integration</li>
              <li>• Custom Calculators</li>
            </ul>
          </div>

          {/* Web Design Services Card */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="flex justify-center mb-4">
              <img src="/src/assets/images/services/web_design.svg" alt="Web Design Icon" className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Web Design</h3>
            <p className="text-gray-200 mb-4">
              Beautiful, responsive websites that capture your brand essence and
              engage your audience.
            </p>
            <ul className="text-left text-gray-300 space-y-2">
              <li>• Responsive Design</li>
              <li>• UI/UX Design</li>
              <li>• Brand Identity</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>

          {/* Small Business Services Card */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="flex justify-center mb-4">
              <img src="/src/assets/images/services/small_business.svg" alt="Small Business Icon" className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Small Business</h3>
            <p className="text-gray-200 mb-4">
              Complete digital solutions for small businesses, from e-commerce
              to customer management.
            </p>
            <ul className="text-left text-gray-300 space-y-2">
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
