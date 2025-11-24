import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  MessageSquare,
  BookOpen,
  Calendar,
  Heart,
} from "lucide-react";
import Logo from "../assets/logo.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto relative">
        <div className="bg-white px-6 py-4 flex items-center justify-between ">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-7 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-10 text-black relative"
            onMouseLeave={() => setProductOpen(false)}
          >
            {/* Product */}
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition"
              onMouseEnter={() => setProductOpen(true)}
            >
              Product <ChevronDown size={18} />
            </div>

            {/* Full Width Dropdown */}
            {productOpen && (
              // This wrapper keeps the dropdown centered and full-screen width
              <div className="absolute left-1/2 -translate-x-1/2 ml-6 top-full w-screen">

                {/* This inner div applies the max-width and margin auto for alignment */}
                <div className="max-w-7xl mx-auto">
                  <div
                    className="pointer-events-auto mt-4 bg-white rounded-2xl  border border-gray-50 w-full px-12 py-10"
                  >
                    <div className="mb-8 pb-4 border-b border-gray-100">
                      <a href="/features" className="text-black font-medium ">
                        Product <span className="ml-3 text-sm text-gray-500 hover:text-lime-600 transition font-normal">All features &rarr;</span>
                      </a>
                    </div>
                    <div className="grid grid-cols-4 gap-10">

                      {/* Column 1 */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <MessageSquare className="w-5 h-5 text-gray-600" />
                          <h4 className="text-base font-semibold text-black">Communication & Collaboration</h4>
                        </div>
                        <ul className="text-gray-600 space-y-3">
                          <li>
                            Seamless Communication between Students, Teachers and Parents.
                          </li>
                        </ul>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <BookOpen className="w-5 h-5 text-gray-600" />
                          <h4 className="text-base font-semibold text-black">Onboarding, Learning & Training</h4>
                        </div>
                        <ul className="text-gray-600 space-y-3">
                          <li>
                            A structured, intuitive learning experience..
                          </li>
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Calendar className="w-5 h-5 text-gray-600" />
                          <h4 className="text-base font-semibold text-black">Student Engagement & Growth</h4>
                        </div>
                        <ul className="text-gray-600 space-y-3">
                          <li>Track academic progress, participate in fun challenges like MathQuest, and stay motivated throughout the year.</li>
                        </ul>
                      </div>

                      {/* Column 4 */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Heart className="w-5 h-5 text-gray-600" />
                          <h4 className="text-base font-semibold text-black">Daily Operations & School Workflow</h4>
                        </div>
                        <ul className="text-gray-600 space-y-3">
                          <li>
                            Simplify everyday tasks with digital tools for event management, communication, announcements, and more.
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )}

            <a href="#" className="hover:text-gray-600">Why us?</a>
            <a href="#" className="hover:text-gray-600">Cases</a>
            <a href="#" className="hover:text-gray-600">About us</a>
            <a href="#" className="hover:text-gray-600">Blog</a>
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-6">
            <button className="bg-lime-400 hover:bg-lime-300 font-medium px-6 py-2 rounded-xl transition">
              Get Started
            </button>
          </div>

          {/* Mobile menu icon */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden text-black">
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
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}