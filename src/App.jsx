import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechnicalExpertise from "./components/TechnicalExpertise";
import FeaturedProjects from "./components/FeaturedProjects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";

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
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
