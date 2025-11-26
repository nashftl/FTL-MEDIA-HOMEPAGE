import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const FTLRadioPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-20">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="fixed top-24 right-4 z-50 bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-full border border-gray-700 transition-all duration-300 hover:scale-110"
        aria-label="Close FTL Radio Page"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-6">FTL Radio</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our boutique music label offering specialty services in music production and video editing.
          </p>
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}

        {/* Iframe Container */}
        <div className="relative w-full" style={{ minHeight: '80vh' }}>
          <iframe
            src="/ftl-radio-homepage/index.html"
            title="FTL Radio Homepage"
            className="w-full border-0 rounded-lg"
            style={{ height: '80vh' }}
            onLoad={handleIframeLoad}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default FTLRadioPage;
