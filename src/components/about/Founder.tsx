import React from "react";
import Lokesh from "../../assets/founders/lokesh.png";
import Jeet from "../../assets/founders/jityendradeep.png";

export default function FounderSection() {
  return (
    <section className="bg-[#0A0C12] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-28">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight lg:max-w-xl">
            We're building the next generation of employee apps
          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            Founded in 2019 and based in Copenhagen, Monotree is a 100% founder-owned
            company known for its commitment to customers and product excellence.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            The existing products in this category were either very poorly built or lacked
            the mindset of genuinely putting people first. We wanted to change that — and
            we did.
          </p>
        </div>

        {/* Right founder area */}
        <div className="col-span-1 flex justify-center lg:justify-end">
          <ul className="flex flex-col items-center gap-10 sm:gap-12 md:flex-row md:items-start">
            {/* Founder 1 */}
            <li className="relative">
              {/* Top SVG decoration */}
              <svg
                className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-800"
                width="84"
                height="25"
                viewBox="0 0 84 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84 12.5L59.6507 12.5M34.7074 12.5L46.5852 24.5M34.7074 12.5L59.6507 12.5M34.7074 12.5L6.22783e-08 12.5M59.6507 12.5L71.5284 0.5"
                  stroke="currentColor"
                />
              </svg>

              <figure className="-rotate-1 sm:-rotate-2 md:-rotate-4 relative z-20">
                <div className="relative w-32 h-40 sm:w-40 sm:h-52 md:w-44 md:h-60 lg:w-56 lg:h-72 xl:w-60 xl:h-80 isolate z-20 before:absolute before:inset-0 before:bg-gray-100/10 before:-rotate-6 before:rounded-2xl before:-z-10 before:-ml-3 sm:before:-ml-4 before:mr-3 sm:before:mr-4 after:absolute after:inset-0 after:border after:border-gray-100/5 after:bg-gray-900/10 after:rounded-2xl">
                  <div className="w-full h-full rounded-2xl bg-lime-400">
                    <img
                      src={Lokesh}
                      alt="Lokesh E"
                      className="w-full h-full rounded-2xl shadow-lg select-none object-cover"
                      draggable="false"
                      loading="lazy"
                    />
                  </div>
                </div>
                <figcaption className="mt-4 sm:mt-5 text-center md:text-left">
                  <p className="text-sm sm:text-base text-gray-100">Lokesh E</p>
                  <p className="text-xs sm:text-sm text-gray-500">Co-Founder, CEO</p>
                </figcaption>
              </figure>
            </li>

            {/* Founder 2 */}
            <li className="relative">
              {/* Top SVG decoration */}
              <svg
                className="hidden lg:block absolute top-0 left-8 text-gray-800"
                width="114"
                height="37"
                viewBox="0 0 114 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M114 12.5L65.6507 12.5M34.7074 12.5L46.5852 0.5M34.7074 12.5L65.6507 12.5M34.7074 12.5L6.22783e-08 12.5M65.6507 12.5L77.5284 24.5M16.3581 24.5L53.7074 24.5M34.7074 24.5L46.5852 36.5"
                  stroke="currentColor"
                />
              </svg>

              <figure className="rotate-1 sm:rotate-2 md:rotate-3 md:mt-10 md:-ml-2 lg:mt-16 lg:-ml-3 relative z-10">
                <div className="relative w-32 h-40 sm:w-40 sm:h-52 md:w-44 md:h-60 lg:w-56 lg:h-72 xl:w-60 xl:h-80 isolate before:absolute before:inset-0 before:bg-gray-100/10 before:rotate-6 before:rounded-2xl before:-z-10 after:absolute after:inset-0 after:border after:border-gray-100/5 after:bg-gray-900/10 after:rounded-2xl">
                  <div className="w-full h-full rounded-2xl bg-lime-400">
                    <img
                      src={Jeet}
                      alt="Jitendriyadeep"
                      className="w-full h-full rounded-2xl select-none object-cover"
                      draggable="false"
                      loading="lazy"
                    />
                  </div>
                </div>
                <figcaption className="mt-4 sm:mt-5 text-center md:text-left">
                  <p className="text-sm sm:text-base text-gray-100">Jitendriyadeep</p>
                  <p className="text-xs sm:text-sm text-gray-500">Co-Founder, CTO</p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
