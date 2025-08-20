import React, { useState } from 'react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      image: '/src/assets/images/project-1.png', // Placeholder
      category: 'Music',
      title: 'Beat Spark',
      description: 'A creative platform designed to help music producers overcome beat block by generating inspiring beat ideas. This tool offers a variety of customizable options and templates. It\'s perfect for musicians looking to allowing users to spark their creativity effortlessly. Ideal for musicians seeking new inspiration and workflow enhancement.',
      techTags: [],
      liveDemo: 'https://beat-spark.netlify.app/',
      codeLink: 'https://github.com/nashftl/groove-craft-limitless-v3.git',
    },
    {
      id: 2,
      image: '/src/assets/images/project-2.png', // Placeholder
      category: 'Music',
      title: 'Coverflow',
      description: 'An interactive 3D album cover wheel that showcases music albums and singles in a rotating coverflow interface. This application provides users with a cool way to browse and discover music collections, animation with responsive design.',
      techTags: [],
      liveDemo: 'https://coverflow.netlify.app/',
      codeLink: 'https://github.com/nashftl/coverflow-3d.git',
    },
    {
      id: 3,
      image: '/src/assets/images/project-3.png', // Placeholder
      category: 'Utility',
      title: 'Flick Vault',
      description: 'A media management tool that allows users to store, organize, and update all their watched movies, TV shows, and videos in one centralized vault. With integrated search capabilities and backend support, it helps users keep track of their viewing history and discover new content efficiently.',
      techTags: [],
      liveDemo: 'https://flick-vault.netlify.app/',
      codeLink: 'https://github.com/nashftl/flick-vault.git',
    },
    {
      id: 4,
      image: '/src/assets/images/project-4.png', // Placeholder
      category: 'Music',
      title: 'Label Ops',
      description: 'An operations dashboard tailored for music labels, designed to monitor and track all aspects of label management. From tracking releases and artist activities to overseeing administrative tasks, this platform streamlines workflows with user login and admin profile features for secure and efficient management.',
      techTags: [],
      liveDemo: 'https://label-ops.netlify.app/',
      codeLink: 'https://github.com/nashftl/label-ops.git',
    },
    {
      id: 5,
      image: '/src/assets/images/project-5.png', // Placeholder
      category: 'Web Design',
      title: 'Retro Artist Portfolio',
      description: 'Retro-styled homepage template for music labels or artist collectives. This portfolio site combines vintage design elements with modern web functionality to create a unique online presence for the label or collective.',
      techTags: [],
      liveDemo: 'https://retro-artist-portfolio.netlify.app/',
      codeLink: 'https://github.com/nashftl/retro-label-portfolio.git',
    },
    {
      id: 6,
      image: '/src/assets/images/project-6.png', // Placeholder
      category: 'Small Business',
      title: 'Spaza Shop',
      description: 'An e-commerce platform featuring a product catalog, shopping cart, and checkout system. Designed to provide an online shopping experience, this store supports product browsing, order management, and secure transactions, catering to small businesses looking to establish an online storefront.',
      techTags: [],
      liveDemo: 'https://spaza-shop.netlify.app/',
      codeLink: 'https://github.com/nashftl/spaza-shop.git',
    },
    {
      id: 7,
      image: '/src/assets/images/project-7.png', // Placeholder
      category: 'Utility',
      title: 'Tarot Card Demo',
      description: 'An atmospheric tarot card reading application with a dark theme, offering users a way to explore tarot card meanings and readings. The interface focuses on immersive imagery and intuitive navigation to create a mystical and user-friendly experience.',
      techTags: [],
      liveDemo: 'https://tarot-card-demo.netlify.app/',
      codeLink: 'https://github.com/nashftl/tarot-reader.git',
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