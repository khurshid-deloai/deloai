// Home.tsx
// React + TypeScript component using Tailwind CSS
// Inline SVG is used as a decorative horizontal abstract line background.
// The SVG uses `stroke="currentColor"` so Tailwind's text color classes control the line color.

import React from "react";

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative horizontal abstract lines (background) */}
      <svg
        className="absolute inset-x-0 top-0 w-full h-72 pointer-events-none text-gray-700 opacity-90"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        role="img"
      >
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Primary smooth wave */}
          <path d="M0 150 C160 120, 320 90, 480 110 S800 160, 960 140 S1280 100, 1440 130 S1760 200, 1920 170" />
          {/* Secondary subtle line */}
          <path
            d="M120 200 C260 185, 380 160, 520 170 S760 210, 900 190 S1160 140, 1320 160 S1600 210, 1780 195"
            strokeWidth="1.4"
            opacity="0.55"
          />
          {/* Tertiary faint line */}
          <path
            d="M60 120 C220 105, 420 80, 600 95 S940 140, 1120 125 S1440 90, 1700 110"
            strokeWidth="1.2"
            opacity="0.45"
          />
        </g>
      </svg>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Clean, minimal background lines
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            This demo shows an inline responsive SVG used as a subtle decorative background. It uses Tailwind classes
            to control color, size and positioning.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Scales perfectly</h2>
            <p className="mt-2 text-gray-600">The SVG is vector-based so it stays crisp at any resolution.</p>
          </div>

          <div className="rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Style control</h2>
            <p className="mt-2 text-gray-600">
              Change the line color by swapping the Tailwind color class on the SVG wrapper (e.g.{" "}
              <code className="rounded bg-gray-100 px-1 text-xs">text-gray-400</code>).
            </p>
          </div>
        </section>
      </div>

      {/* Optional footer / small content so background is visible below fold */}
      <footer className="relative z-10 mt-24 py-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company — Decorative SVG background demo
      </footer>
    </main>
  );
};

export default Home;