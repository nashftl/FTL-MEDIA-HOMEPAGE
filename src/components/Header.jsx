import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-black text-white">
      {/* Logo and Website Name */}
      <div className="flex items-center" aria-label="Website Logo and Name">
        <img
          src="/src/assets/icons/logo.svg"
          alt="WS"
          className="h-8 w-8 mr-2"
        />
        <span className="text-xl font-bold">Web Services</span>
      </div>
      <nav className="hidden md:flex items-center space-x-4">
        <a href="#home" className="hover:text-gray-400">
          Home
        </a>
        <a href="#services" className="hover:text-gray-400">
          Services
        </a>
        <a href="#skills" className="hover:text-gray-400">
          Skills
        </a>
        <a href="#portfolio" className="hover:text-gray-400">
          Portfolio
        </a>
        <a href="#testimonials" className="hover:text-gray-400">
          Testimonials
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </nav>
      {/* Utility Navigation (Theme Toggle and Get Started Button) */}
      <div
        className="flex items-center space-x-4"
        aria-label="Utility Navigation"
      >
        <button className="hidden md:block hover:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-md">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
