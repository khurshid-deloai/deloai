import React, { useState, useEffect } from "react";

const CLIENT_LOGOS = [
  { name: "Pro Tech International", src: "https://protechinternational.net/images/icon/new1.png", href: "https://protechinternational.net" },
  { name: "Kimberlite Chemicals", src: "https://kimberlitechemicals.com/img/kim/kimberlite%20.%20logo.png", href: "https://kimberlitechemicals.com" },
  { name: "World of Chemicals", src: "https://www.worldofchemicals.com/assets/img/woc-sus-logo.png", href: "https://www.worldofchemicals.com" },
  { name: "Arkaa Clusters", src: "https://arkaacluster.com/wp-content/uploads/2023/06/arkaa-cluster-logo.png", href: "https://arkaacluster.com" },
  { name: "ChemicalToday", src: "https://chemicaltoday.in/static/media/logo4.2dfecae919ca1ba0214c92c032106f60.svg", href: "https://chemicaltoday.in" },
  { name: "Promptitude", src: "https://promptitude.in/assets/img/logo.png", href: "https://promptitude.in" },
  { name: "Fortune HomeCare", src: "https://fortunehomecare.com/assets/images/logo-dark.svg", href: "https://fortunehomecare.com" },
];

const TESTIMONIALS = [
  {
    quote: "They feel less like an external agency and more like an embedded product team. From UX to deployment, everything is handled with care and clarity.",
    author: "Jordan Lee",
    role: "Head of Product, Acme Corp",
    initials: "JL"
  },
  {
    quote: "Working with this team transformed how we approach product development. Their attention to detail and speed of execution is unmatched.",
    author: "Sarah Chen",
    role: "CTO, Nova Labs",
    initials: "SC"
  },
  {
    quote: "The best investment we've made in our product. They helped us ship faster without compromising on quality.",
    author: "Marcus Rivera",
    role: "VP Engineering, Brightline",
    initials: "MR"
  }
];

const OurClientsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-10 flex flex-col items-start gap-4 text-left md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded-sm bg-lime-100 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-lime-600">
              OUR CLIENTS
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Trusted by teams
              <br className="hidden sm:block" /> across industries.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
              From early-stage startups to established enterprises, we partner
              with product teams who care about quality, speed, and long-term
              impact.
            </p>
          </div>
        </div>

        {/* Logos Infinite Scroll */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-white px-6 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <div className="relative">
            <div className="flex animate-scroll gap-12">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex h-16 w-40 flex-shrink-0 items-center justify-center"
                >
                  {client.src ? (
                    <a
                      href={client.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className="h-10 w-auto max-w-[140px] object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                      />
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-slate-400 text-center">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="relative overflow-hidden rounded-2xl border border-lime-100 bg-lime-50 px-6 py-8 sm:px-8 sm:py-10">
          <div className="relative">

            {/* Testimonial Content */}
            <div className="mb-6 min-h-[120px]">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial
                      ? "opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0"
                  }`}
                >
                  <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-200 text-sm font-semibold text-lime-700">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-xs text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "w-8 bg-lime-600"
                        : "w-2 bg-lime-300 hover:bg-lime-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition hover:bg-lime-100 hover:text-lime-700"
                  aria-label="Previous testimonial"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextTestimonial}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition hover:bg-lime-100 hover:text-lime-700"
                  aria-label="Next testimonial"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
};

export default OurClientsSection;
