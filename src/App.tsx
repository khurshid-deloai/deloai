import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/Hero";
import CareerPrepSection from "./components/CareerPrep";
import ServiceSection from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import OurClientsSection from "./OurClientsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Policy from "./pages/Policy"; // Privacy Policy page
import GalleryPage from "./components/MathQuest/Gallery/Gallery";
import AboutHero from "./components/about/Hero";
import About from "./pages/About";

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
                <>
                  {/* Hero */}
                  <div className="mt-10 ">
                    <HeroSection />
                  </div>
    {/* Why Us */}
     <section id="career-prep">
                    <CareerPrepSection/>
                  </section>
                  <section id="why-us">
                    <WhyChooseUs />
                  </section>
                  {/* Services */}
                  <section id="services " >
                    <ServiceSection />
                  </section>

              

                  {/* Portfolio */}
                  <section id="portfolio" >
                    <OurClientsSection />
                  </section>

                  {/* Contact */}
                  <section id="contact" >
                    <Contact />
                  </section>
                </>
              }
            />

            {/* Privacy Policy Route */}
            <Route path="/privacy-policy" element={<Policy />} />
                        <Route path="/mathquest/2024-25/gallery" element={<GalleryPage/>} />

            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
