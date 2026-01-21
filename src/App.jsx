import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TestimonialHero from "./components/TestimonialHero";
import TestimonialsGrid from "./components/TestimonialsGrid";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-background text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TestimonialHero />
        <TestimonialsGrid />
        <Pricing />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
