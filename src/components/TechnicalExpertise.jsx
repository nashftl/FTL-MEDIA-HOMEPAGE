import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TechnicalExpertise = () => {
  const { ref: skillsRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="bg-gray-50 dark:bg-black text-black dark:text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">A comprehensive toolkit for building modern web applications across all domains.</p>

        <div 
          ref={skillsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Frontend Card */}
          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Vue.js</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Angular</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">SASS/SCSS</span>
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Express.js</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">MongoDB</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Redis</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">GraphQL</span>
            </div>
          </div>

          {/* Music Tech Card */}
          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Music Tech</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Web Audio API</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Tone.js</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">WebRTC</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Audio Processing</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">MIDI</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">DAW Integration</span>
            </div>
          </div>

          {/* Tools & Platform Card */}
          <div className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Tools & Platform</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Git</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Docker</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">AWS</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Vercel</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Figma</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Shopify</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Contentful</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-500 px-3 py-1 rounded-full text-sm">Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
