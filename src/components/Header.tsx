// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (sectionId) => {
    // If already on home, just dispatch an event so App can scroll
    if (location.pathname === "/") {
      window.dispatchEvent(new CustomEvent("scroll-to-section", { detail: sectionId }));
      setMobileOpen(false);
      return;
    }

    // Otherwise navigate to home and include requested section in state
    navigate("/", { state: { scrollTo: sectionId } });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4">
      <div className="px-0 md:px-8 lg:px-12">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="px-[5%] md:px-[10%] py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <a href="/"><img src={Logo} alt="Logo" className="h-7 w-auto" /></a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10 text-black relative">
              <button type="button" onClick={() => goToSection("services")} className="hover:text-gray-600 transition">
                Services
              </button>
              <button type="button" onClick={() => goToSection("why-us")} className="hover:text-gray-600 transition">
                Why Us?
              </button>
              <button type="button" onClick={() => goToSection("portfolio")} className="hover:text-gray-600 transition">
                Portfolio
              </button>
              <a href="/about" className="hover:text-gray-600 transition">About</a>
            </nav>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-6">
              <button type="button" onClick={() => goToSection("contact")}  className="bg-lime-400 hover:bg-lime-300 font-medium px-6 py-2 rounded-xl transition">Contact Us</button>
            </div>

            {/* Mobile menu icon */}
            <button onClick={() => setMobileOpen(true)} className="md:hidden text-black">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-50">
          <div className="bg-white w-72 h-full shadow-xl p-6 flex flex-col gap-6 rounded-l-2xl">
            <button onClick={() => setMobileOpen(false)} className="self-end text-gray-500 hover:text-black">
              <X size={28} />
            </button>

            <div className="flex flex-col gap-4 text-center text-lg">
              <button onClick={() => goToSection("services")}>Services</button>
              <button onClick={() => goToSection("why-us")}>Why Us?</button>
              <button onClick={() => goToSection("portfolio")}>Portfolio</button>
              <a href="/about" onClick={() => setMobileOpen(false)} className="hover:text-gray-600 transition">About</a>
            </div>

            
              <button onClick={() => goToSection("contact")} className="mt-6 bg-lime-400 hover:bg-lime-300 font-medium px-6 py-3 rounded-xl shadow-md transition">Contact Us</button>
          
          </div>
        </div>
      )}
    </header>
  );
}
