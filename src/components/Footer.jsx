import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src="/src/assets/icons/logo.svg" alt="WS" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Web Services</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional web development services across music, utility, design, and business solutions.
            </p>
          </div>

          {/* Services Links */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Music Development</a></li>
              <li><a href="#" className="hover:text-white">Utility Tools</a></li>
              <li><a href="#" className="hover:text-white">Web Design</a></li>
              <li><a href="#" className="hover:text-white">Small Business</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.444v-2.425z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                {/* Twitter Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.49 2.902-6.49 6.49 0 .509.058 1.007.17 1.485-5.392-.27-10.17-2.866-13.38-6.807-.56.967-.883 2.097-.883 3.301 0 2.278 1.159 4.287 2.919 5.465-.85-.029-1.65-.264-2.35-.645-.005.02-.005.04-.005.062 0 3.181 2.26 5.835 5.26 6.43-.55.148-1.13.21-1.73.21-.42 0-.82-.04-1.22-.11.84.26 1.65.92 2.32 1.829 2.65 2.54 6.29 4.06 10.06 4.06 12.07 0 18.62-9.92 18.62-18.62 0-.285-.009-.568-.026-.85z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                {/* Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.254-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 6.868c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5c0-2.481-2.019-4.5-4.5-4.5zm0 8.163c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5 3.5 1.568 3.5 3.5c0 1.932-1.568 3.5-3.5 3.5zm7.163-12.934c-.965 0-1.65-.685-1.65-1.65s.685-1.65 1.65-1.65 1.65.685 1.65 1.65-.685 1.65-1.65 1.65z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                {/* Email Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.726v15.439h24v-15.439l-12 9.726z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 Web Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
