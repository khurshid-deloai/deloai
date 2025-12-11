// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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

/*
  Helper component placed inside BrowserRouter so it can use useLocation.
  It watches route changes + location.state and scrolls to the appropriate section IDs.
*/
function ScrollToHandler() {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = (id) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        // Use requestAnimationFrame to give mounted content a chance to render
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
      }
    };

    // 1) When navigated via navigate("/", { state: { scrollTo: 'services' } })
    if (location?.state?.scrollTo) {
      scrollToId(location.state.scrollTo);
      return;
    }

    // 2) When visiting link with hash like "/#services"
    if (location.hash) {
      scrollToId(location.hash.slice(1));
      return;
    }

    // no-op otherwise
  }, [location]);

  useEffect(() => {
    const handler = (e) => {
      const id = e?.detail;
      if (id) {
        const el = document.getElementById(id);
        if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
      }
    };
    window.addEventListener("scroll-to-section", handler);
    return () => window.removeEventListener("scroll-to-section", handler);
  }, []);

  return null;
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Hero */}
              <div className="mt-10 ">
                <HeroSection />
              </div>

              {/* Career Prep (was id="career-prep") */}
              <section id="career-prep">
                <CareerPrepSection />
              </section>

              {/* Why Us */}
              <section id="why-us">
                <WhyChooseUs />
              </section>

              {/* Services - NOTE: removed trailing space from id */}
              <section id="services">
                <ServiceSection />
              </section>

              {/* Portfolio */}
              <section id="portfolio">
                <OurClientsSection />
              </section>

              {/* Contact */}
              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />

        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/mathquest/2024-25/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* ScrollToHandler must be inside the Router so it can use useLocation */}
        <ScrollToHandler />

        <main className="flex-1">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
