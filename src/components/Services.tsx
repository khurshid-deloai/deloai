import React from "react";

// Keep your existing data structure
const cardData = [
  {
    title: "Strategy & Planning",
    mainIcon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    services: [
      {
        title: "Product Strategy",
        description:
          "Clear direction, feature planning, and technical scoping to set the right foundation before building.",
      },
    ],
  },
  {
    title: "Design & Experience",
    mainIcon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    services: [
      {
        title: "UX/UI Design",
        description:
          "Modern, intuitive designs for websites, apps, and dashboards — focused on clarity and usability.",
      },
    ],
  },
  {
    title: "Engineering & Tech",
    mainIcon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    services: [
      {
        title: "Web & App Development",
        description:
          "Full-stack development for websites, platforms, and mobile apps — built fast, stable, and scalable.",
      },
      {
        title: "Hosting & Maintenance",
        description:
          "Secure hosting, updates, monitoring, bug fixes, and long-term product support.",
      },
    ],
  },
  {
    title: "Growth & Intelligence",
    mainIcon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" />
        <path d="M16 16v.01" />
        <path d="M12 12v.01" />
      </svg>
    ),
    services: [
      {
        title: "AI & Automation",
        description:
          "Intelligent tools, automation workflows, and integrated AI features to enhance product performance.",
      },
      {
        title: "Digital Marketing",
        description:
          "Launch content, SEO, social presence, ads, and growth campaigns to help your product reach users.",
      },
    ],
  },
];

export default function ServiceSection() {
  const [strategy, design, engineering, growth] = cardData;

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 border-t border-gray-200 bg-white"
    >
      {/* Header – similar to Product Highlights */}
      <header className="mb-10 lg:mb-16 px-4 max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div>
          <h2 className="relative mb-3 md:mb-4 text-3xl md:text-4xl font-light tracking-tight">
            Service{" "}
            <span className="relative inline-block">
              highlights
              {/* Underline SVG accent */}
              <svg
                className="absolute text-gray-900 w-[80px] md:w-[120px] right-0 -bottom-2 md:-bottom-3"
                aria-hidden="true"
                viewBox="0 0 117 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.52643 7.99766C4.94183 5.69998 2.85228 3.68244 1 1.59863M109.77 14.3969C110.378 13.7416 110.937 13.0433 111.515 12.3608M68 9.00049C68.2139 6.63002 68.6547 4.31683 69 2.00049M17.8709 63.5527C15.6537 64.3763 13.7205 66.0614 11.7627 67.334M70 65.0005C70.3433 66.9512 70.6707 68.9328 71 71.0005M111.806 56.8633C113.335 57.5003 114.724 58.3876 116.169 59.1902"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl">
            From strategy to growth, we cover the full lifecycle of your digital
            product.
          </p>
        </div>

        
      </header>

      {/* Main grid – mimics the product highlights layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <ul className="grid grid-cols-1 md:grid-cols-[42.5%_15%_42.5%] rounded-3xl bg-gray-200/60 p-0 md:p-0 overflow-hidden">
          {/* 1. Big left card – Strategy */}
          <li className="relative col-span-1 md:col-span-2 h-[400px] flex flex-col justify-end p-6 md:p-8 rounded-3xl bg-gray-50 overflow-hidden border border-gray-200">
            <div className="mb-4">
              <div className="text-gray-900 mb-3">{strategy.mainIcon}</div>
              <h3 className="mb-2 text-xl md:text-2xl font-semibold">
                {strategy.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 max-w-md">
                {strategy.services[0].description}
              </p>
            </div>

            {/* Decorative aside – stacked sticky notes / cards */}
            <aside className="absolute flex top-0 md:top-10 -right-4 md:-right-6">
              <div className="w-48 md:w-56 mt-20 space-y-4 -mr-4 md:-mr-2">
                <div className="pl-8 rotate-3" aria-hidden="true">
                  <div className="relative py-2.5 pl-3 pr-4 rounded-2xl text-gray-800 bg-green-500 shadow-lg">
                    <p className="text-xs font-medium text-white">
                      Roadmap session in progress…
                    </p>
                    <span className="absolute bottom-0 right-2 text-[10px] text-indigo-100">
                      Strategy
                    </span>
                  </div>
                </div>
                <div
                  className="hidden md:block pl-6 -rotate-2"
                  aria-hidden="true"
                >
                  <div className="relative py-3 px-4 rounded-2xl bg-white shadow-md border border-gray-200">
                    <div className="flex flex-wrap gap-y-1 -mx-0.5">
                      <span className="h-1.5 px-0.5 w-1/3 relative before:content-[''] before:absolute before:inset-y-0 before:inset-x-0.5 before:bg-gray-400 before:rounded-full" />
                      <span className="h-1.5 px-0.5 w-1/4 relative before:content-[''] before:absolute before:inset-y-0 before:inset-x-0.5 before:bg-gray-300 before:rounded-full" />
                      <span className="h-1.5 px-0.5 w-2/5 relative before:content-[''] before:absolute before:inset-y-0 before:inset-x-0.5 before:bg-gray-500 before:rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="w-52 rounded-2xl p-3 space-y-2 shadow-lg bg-white rotate-3 relative">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center"><p className="text-white font-bold">CP</p></div>
                    <div className="flex-1">
                      <h4 className="text-xs font-semibold text-green-500">
                        Strategy Workshop
                      </h4>
                      <p className="text-[10px] text-gray-500">Next week</p>
                    </div>
                  </div>
                  <div className="mt-2 h-20 rounded-xl bg-gray-200" />
                  <div className="flex flex-wrap gap-y-1 -mx-0.5 pt-2">
                    <span className="h-1.5 px-0.5 w-1/2 relative before:content-[''] before:absolute before:inset-y-0 before:inset-x-0.5 before:bg-gray-300 before:rounded-full" />
                    <span className="h-1.5 px-0.5 w-2/5 relative before:content-[''] before:absolute before:inset-y-0 before:inset-x-0.5 before:bg-gray-300 before:rounded-full" />
                  </div>
                </div>
              </div>
            </aside>
          </li>

          {/* 2. Right-top – Design & Experience */}
          <li className="relative col-span-1 h-[400px] flex flex-col justify-end p-6 md:p-8 rounded-3xl bg-gray-50 overflow-hidden border border-gray-200 md:-ml-px md:-mt-px md:mt-0">
            <div className="mb-4">
              <div className="text-gray-900 mb-3">{design.mainIcon}</div>
              <h3 className="mb-2 text-lg md:text-xl font-semibold">
                {design.title}
              </h3>
              <p className="text-sm text-gray-600 max-w-sm">
                {design.services[0].description}
              </p>
            </div>

            <aside className="absolute right-4 md:right-6 top-0 flex">
              <div className="w-40 relative -top-10">
                <div className="rounded-2xl p-1 shadow-md bg-white rotate-3">
                  <div className="aspect-[5/3] rounded-xl bg-gray-200 mb-2" />
                  <div className="flex flex-wrap gap-y-1 -mx-0.5 px-1 pb-1">
                    <span className="h-1.5 px-0.5 w-2/5 relative before:content-[''] before:absolute before:inset-y-0 before:inset-x-0.5 before:bg-gray-300 before:rounded-full" />
                    <span className="h-1.5 px-0.5 w-1/3 relative before:content-[''] before:absolute before:inset-y-0 before:inset-x-0.5 before:bg-gray-300 before:rounded-full" />
                  </div>
                </div>
              </div>
            </aside>
          </li>

          {/* 3. Right-middle – Engineering & Tech */}
          <li className="relative col-span-1 h-[400px] flex flex-col justify-end p-6 md:p-8 rounded-3xl bg-gray-50 overflow-hidden border border-gray-200 md:-mt-px">
            <div className="mb-4">
              <div className="text-gray-900 mb-3">{engineering.mainIcon}</div>
              <h3 className="mb-2 text-lg md:text-xl font-semibold">
                {engineering.title}
              </h3>
              <p className="text-sm text-gray-600 max-w-sm">
                {engineering.services[0].description}
              </p>
              {engineering.services[1] && (
                <p className="mt-2 text-xs md:text-sm text-gray-500 max-w-sm">
                  {engineering.services[1].description}
                </p>
              )}
            </div>

            <aside className="absolute right-4 md:right-6 top-4 flex gap-3">
              <div className="w-40 p-3 rounded-2xl shadow-md bg-white">
                <p className="text-[11px] text-gray-700 mb-2">
                  Uptime this month
                </p>
                <p className="text-lg font-semibold">99.9%</p>
                <div className="mt-3 h-10 rounded-xl bg-blue-500" />
              </div>
            </aside>
          </li>

          {/* 4. Bottom full-width – Growth & Intelligence */}
          <li className="relative col-span-1 md:col-span-2 h-[400px] flex flex-col justify-end p-6 md:p-8 rounded-3xl bg-gray-50 overflow-hidden border border-gray-200 md:-mt-px">
            <div className="mb-4 max-w-lg">
              <div className="text-gray-900 mb-3">{growth.mainIcon}</div>
              <h3 className="mb-2 text-xl md:text-2xl font-semibold">
                {growth.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {growth.services[0].description}
              </p>
              {growth.services[1] && (
                <p className="mt-2 text-xs md:text-sm text-gray-500">
                  {growth.services[1].description}
                </p>
              )}
            </div>

            <aside className="absolute -right-4 md:right-8 top-6 md:top-10 flex flex-col md:flex-row gap-4">
              <div className="w-44 p-4 rounded-2xl shadow-md bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-600">Campaign reach</span>
                  <span className="text-xs font-medium bg-red-500 text-white px-2 py-0.5 rounded-full">
                    Live
                  </span>
                </div>
                <p className="text-2xl font-semibold mb-3">+182%</p>
                <div className="h-14 rounded-xl bg-red-200" />
              </div>

              <div className="hidden md:block w-44 p-4 rounded-2xl shadow-md bg-indigo-500 text-gray-100">
                <h4 className="text-xs mb-3">Top growth channel</h4>
                <p className="text-sm font-medium mb-2">Organic traffic</p>
                <div className="flex items-center text-[11px] space-x-2">
                  <span className="inline-flex h-1 w-10 rounded-full bg-gray-100" />
                  <span>SEO + Content</span>
                </div>
              </div>
            </aside>
          </li>
        </ul>
      </div>
    </section>
  );
}
