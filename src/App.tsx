import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import ServiceSection from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Projects";
import OurClientsSection from "./OurClientsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <div className="mt-10">
        <HeroSection />
      </div>

      {/* Services section (for #services) */}
      <section id="services">
        <ServiceSection />
      </section>

      {/* Why Us? section (for #why-us) */}
      <section id="why-us">
        <WhyChooseUs />
      </section>

      {/* Portfolio section (for #portfolio) */}
      <section id="portfolio">
        <OurClientsSection />
      </section>

      {/* Extra section you already had */}
      <OurClientsSection />

      {/* Contact section (for #contact) */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
