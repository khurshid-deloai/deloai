import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/Hero";
import ServiceSection from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import OurClientsSection from "./OurClientsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Policy from "./pages/Policy"; // Privacy Policy page

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Header on all pages */}
        <Header />

        {/* Main content */}
        <main className="flex-1">
          <Routes>
            {/* Main Website Route */}
            <Route
              path="/"
              element={
                <div>
                  {/* Hero */}
                  <div className="mt-10">
                    <HeroSection />
                  </div>

                  {/* Services */}
                  <section id="services">
                    <ServiceSection />
                  </section>

                  {/* Why Us */}
                  <section id="why-us">
                    <WhyChooseUs />
                  </section>

                  {/* Portfolio */}
                  <section id="portfolio">
                    <OurClientsSection />
                  </section>

                  {/* Contact */}
                  <section id="contact">
                    <Contact />
                  </section>
                </div>
              }
            />

            {/* Privacy Policy Route */}
            <Route path="/privacy-policy" element={<Policy />} />
          </Routes>
        </main>

        {/* Footer on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
