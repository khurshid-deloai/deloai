import React, { useState } from "react";

export default function ProductHighlights() {
  const [activeProduct, setActiveProduct] = useState("careerprep");

  const products = {
    careerprep: {
      emoji: "🎯",
      title: "CareerPrep",
      badge: "Ongoing Project",
      description: "CareerPrep is our upcoming full-stack placement preparation platform designed for colleges to train students for real-world hiring challenges.",
      features: [
        "Aptitude, reasoning & communication courses",
        "Technical interview prep for CS, IT, ECE & more",
        "Mock tests, analytics & resume-building tools"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
    },
    ischool: {
      emoji: "📘",
      title: "iSchool+",
      badge: "Launched",
      description: "iSchool+ was officially launched during the grand finale of Deloai MathQuest 2024–25 at BMS Institute of Technology & Management. Over 1,600+ students from 60+ schools participated in a mega competition with a ₹1 lakh prize pool, redefining how fun and immersive learning can be.",
      features: [
        "Interactive, gamified learning modules",
        "Student analytics & performance insights",
        "Seamless teacher–student–parent communication"
      ],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop"
    }
  };

  const currentProduct = products[activeProduct];

  return (
    <section className="w-full  py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block px-4 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium mb-4">
            Featured Projects
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Our Flagship <span className="text-lime-500">Education Products</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl">
            We're building powerful, future-ready platforms that transform how students learn and how colleges prepare talent for placements.
          </p>

          {/* Product Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveProduct("careerprep")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeProduct === "careerprep"
                  ? "bg-lime-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              CareerPrep
            </button>
            <button
              onClick={() => setActiveProduct("ischool")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeProduct === "ischool"
                  ? "bg-lime-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              iSchool+
            </button>
          </div>

          {/* Active Product Content */}
          <div className="space-y-6 min-h-[400px]">
            <div className="flex gap-4 items-start">
              <div className="text-lime-500 text-3xl">{currentProduct.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold">{currentProduct.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    activeProduct === "careerprep" 
                      ? "bg-blue-100 text-blue-700" 
                      : "bg-lime-100 text-lime-700"
                  }`}>
                    {currentProduct.badge}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {currentProduct.description}
                </p>
                <ul className="text-gray-700 space-y-2">
                  {currentProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-lime-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}