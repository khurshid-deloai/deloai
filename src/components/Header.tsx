import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
<header className="fixed top-0 left-0 w-full z-50 py-4 ">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-white/30 backdrop-blur-lg supports-[backdrop-filter]:bg-white/30" />

      <div className="px-4 md:px-8 lg:px-12">
        <div className="bg-white rounded-2xl  overflow-hidden">
          {/* Main Navbar */}
          <div className="px-[2.5%] py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="h-7 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10 text-black relative">
              <a href="#services" className="hover:text-gray-600 transition">
                Services
              </a>
              <a href="#why-us" className="hover:text-gray-600 transition">
                Why Us?
              </a>
              <a href="#portfolio" className="hover:text-gray-600 transition">
                Portfolio
              </a>
            </nav>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#contact"><button className="bg-lime-400 hover:bg-lime-300 font-medium px-6 py-2 rounded-xl transition">
                Contact Us
              </button>
              </a>
            </div>

            {/* Mobile menu icon */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-black"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-50">
          <div className="bg-white w-72 h-full shadow-xl p-6 flex flex-col gap-6 rounded-l-2xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end text-gray-500 hover:text-black"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col gap-4 text-lg">
              <a href="#services" onClick={() => setMobileOpen(false)}>
                Services
              </a>
              <a href="#why-us" onClick={() => setMobileOpen(false)}>
                Why Us?
              </a>
              <a href="#portfolio" onClick={() => setMobileOpen(false)}>
                Portfolio
              </a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Contact
              </a>
            </div>

            <a href="#contact"><button className="mt-6 bg-lime-400 hover:bg-lime-300 font-medium px-6 py-3 rounded-xl shadow-md transition">
              Contact Us
            </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
