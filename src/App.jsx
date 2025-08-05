import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechnicalExpertise from "./components/TechnicalExpertise";
import FeaturedProjects from "./components/FeaturedProjects";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <TechnicalExpertise />
      <FeaturedProjects />
    </div>
  );
}

export default App;
