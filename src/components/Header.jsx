import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black text-white border-b border-gray-900">
      {/* Logo and Website Name */}
      <Link to="/" className="flex items-center" aria-label="Website Logo and Name">
        <img src="/src/assets/icons/logo.svg" alt="WS" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">Web Services</span>
      </Link>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4">
        <Link to="/" className="transition-colors duration-200 hover:text-gray-400">Home</Link>
        <Link to="/services" className="transition-colors duration-200 hover:text-gray-400">Services</Link>
        {isHomePage ? (
          <>
            <button onClick={() => scrollToSection('skills')} className="transition-colors duration-200 hover:text-gray-400">Skills</button>
            <button onClick={() => scrollToSection('portfolio')} className="transition-colors duration-200 hover:text-gray-400">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="transition-colors duration-200 hover:text-gray-400">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="transition-colors duration-200 hover:text-gray-400">Contact</button>
          </>
        ) : (
          <>
            <Link to="/#skills" className="transition-colors duration-200 hover:text-gray-400">Skills</Link>
            <Link to="/#portfolio" className="transition-colors duration-200 hover:text-gray-400">Portfolio</Link>
            <Link to="/#testimonials" className="transition-colors duration-200 hover:text-gray-400">Testimonials</Link>
            <Link to="/#contact" className="transition-colors duration-200 hover:text-gray-400">Contact</Link>
          </>
        )}
      </nav>
      {/* Utility Navigation (Theme Toggle and Get Started Button) */}
      <div className="flex items-center space-x-4" aria-label="Utility Navigation">
        <button className="hidden md:block transition-all duration-200 hover:text-gray-400 hover:rotate-45">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        {isHomePage ? (
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-black px-4 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 active:scale-95"
          >
            Get Started
          </button>
        ) : (
          <Link 
            to="/#contact"
            className="bg-white text-black px-4 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        )}
        {/* Hamburger Menu Button */}
        <button className="md:hidden text-white focus:outline-none transition-transform duration-200 hover:scale-110" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 animate-fadeIn">
          <Link to="/" className="text-white text-2xl transition-all duration-200 hover:text-gray-400 hover:scale-110" onClick={toggleMenu}>Home</Link>
          <Link to="/services" className="text-white text-2xl transition-all duration-200 hover:text-gray-400 hover:scale-110" onClick={toggleMenu}>Services</Link>
          <Link to="/#skills" className="text-white text-2xl transition-all duration-200 hover:text-gray-400 hover:scale-110" onClick={toggleMenu}>Skills</Link>
          <Link to="/#portfolio" className="text-white text-2xl transition-all duration-200 hover:text-gray-400 hover:scale-110" onClick={toggleMenu}>Portfolio</Link>
          <Link to="/#testimonials" className="text-white text-2xl transition-all duration-200 hover:text-gray-400 hover:scale-110" onClick={toggleMenu}>Testimonials</Link>
          <Link to="/#contact" className="text-white text-2xl transition-all duration-200 hover:text-gray-400 hover:scale-110" onClick={toggleMenu}>Contact</Link>
          <button className="bg-white text-black px-6 py-3 rounded-md text-xl font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105" onClick={toggleMenu}>Get Started</button>
        </div>
      )}
    </header>
  );
};

export default Header;

