import React, { useState } from 'react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      image: '/src/assets/images/project-1.png', // Placeholder
      category: 'Music',
      title: 'SoundWave Studio',
      description: 'A comprehensive audio production platform with real-time collaboration features for musicians and producers.',
      techTags: ['React', 'Web Audio API', 'WebRTC', 'Node.js'],
      liveDemo: 'https://soundwave-studio.netlify.app',
      codeLink: 'https://github.com/yourusername/soundwave-studio',
    },
    {
      id: 2,
      image: '/src/assets/images/project-2.png', // Placeholder
      category: 'Music',
      title: 'Artist Portfolio Hub',
      description: 'A sleek portfolio website for emerging artists to showcase their work and connect with fans.',
      techTags: ['Next.js', 'Spotify API', 'Tailwind CSS'],
      liveDemo: 'https://artist-portfolio-hub.netlify.app',
      codeLink: 'https://github.com/yourusername/artist-portfolio-hub',
    },
    {
      id: 3,
      image: '/src/assets/images/project-3.png', // Placeholder
      category: 'Utility',
      title: 'TaskFlow Manager',
      description: 'An intelligent task management system with automated workflows and team collaboration features.',
      techTags: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
      liveDemo: 'https://taskflow-manager.netlify.app',
      codeLink: 'https://github.com/yourusername/taskflow-manager',
    },
    {
      id: 4,
      image: '/src/assets/images/project-4.png', // Placeholder
      category: 'Web Design',
      title: 'Zen Architecture',
      description: 'A modern architecture firm website with stunning portfolio galleries and smooth animations.',
      techTags: ['React', 'Framer Motion', 'Three.js', 'Contentful'],
      liveDemo: 'https://zen-architecture.netlify.app',
      codeLink: 'https://github.com/yourusername/zen-architecture',
    },
    {
      id: 5,
      image: '/src/assets/images/project-5.png', // Placeholder
      category: 'Small Business',
      title: 'LocalCraft Marketplace',
      description: 'E-commerce platform connecting local artisans with customers, featuring inventory management and analytics.',
      techTags: ['Shopify', 'React', 'GraphQL', 'Klaviyo'],
      liveDemo: 'https://localcraft-marketplace.netlify.app',
      codeLink: 'https://github.com/yourusername/localcraft-marketplace',
    },
    {
      id: 6,
      image: '/src/assets/images/project-6.png', // Placeholder
      category: 'Small Business',
      title: 'MedCare Booking',
      description: 'Healthcare appointment booking system with patient management and automated reminders.',
      techTags: ['React', 'Firebase', 'Twilio', 'Stripe'],
      liveDemo: 'https://medcare-booking.netlify.app',
      codeLink: 'https://github.com/yourusername/medcare-booking',
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter || project.techTags.includes(activeFilter));

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-gray-300 mb-12">A showcase of successful projects across different industries and use cases.</p>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            className={`px-4 py-2 rounded-full ${activeFilter === 'All' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => handleFilterClick('All')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full ${activeFilter === 'Music' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => handleFilterClick('Music')}
          >
            Music
          </button>
          <button
            className={`px-4 py-2 rounded-full ${activeFilter === 'Utility' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => handleFilterClick('Utility')}
          >
            Utility
          </button>
          <button
            className={`px-4 py-2 rounded-full ${activeFilter === 'Web Design' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => handleFilterClick('Web Design')}
          >
            Web Design
          </button>
          <button
            className={`px-4 py-2 rounded-full ${activeFilter === 'Small Business' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => handleFilterClick('Small Business')}
          >
            Small Business
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <span className="text-sm text-gray-400 mb-2 block">{project.category}</span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techTags.map((tag, index) => (
                    <span key={index} className="bg-gray-800 text-gray-500 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l4-4m0 0l-7 7m7-7H14" />
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="border border-white text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
