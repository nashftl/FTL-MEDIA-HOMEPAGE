import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechnicalExpertise from "./components/TechnicalExpertise";
import FeaturedProjects from "./components/FeaturedProjects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Lazy load the Services page for better performance
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black dark:border-white mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <TechnicalExpertise />
    <FeaturedProjects />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
