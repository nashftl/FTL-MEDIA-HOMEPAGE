import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechnicalExpertise from "./components/TechnicalExpertise";
import FeaturedProjects from "./components/FeaturedProjects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <TechnicalExpertise />
      <FeaturedProjects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
