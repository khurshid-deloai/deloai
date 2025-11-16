import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/logo.png"; // update path to your logo

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl px-6 py-4 flex items-center justify-between shadow-md">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-7 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-black">
            <div className="flex items-center gap-1 cursor-pointer">
              Product <ChevronDown size={18} />
            </div>

            <a href="#" className="hover:text-gray-600">Why us?</a>
            <a href="#" className="hover:text-gray-600">Cases</a>
            <a href="#" className="hover:text-gray-600">About us</a>
            <a href="#" className="hover:text-gray-600">Blog</a>
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-6">
            <button className="bg-lime-400 hover:bg-lime-300 font-medium px-6 py-2 rounded-xl shadow-md transition">
              Book a demo
            </button>

            <div className="flex items-center gap-1 cursor-pointer text-black">
              English <ChevronDown size={16} />
            </div>
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
          <div className="bg-white w-72 h-full shadow-xl p-6 flex flex-col gap-6">

            <button
              onClick={() => setMobileOpen(false)}
              className="self-end text-gray-500 hover:text-black"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col gap-4 text-lg">
              <div className="flex items-center gap-1">
                Product <ChevronDown size={18} />
              </div>
              <a href="#">Why us?</a>
              <a href="#">Cases</a>
              <a href="#">About us</a>
              <a href="#">Blog</a>
            </div>

            <button className="mt-6 bg-lime-400 hover:bg-lime-300 font-medium px-6 py-3 rounded-xl shadow-md transition">
              Book a demo
            </button>

            <div className="flex items-center gap-1 mt-4">
              English <ChevronDown size={18} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
