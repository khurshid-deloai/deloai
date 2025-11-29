import React from "react";

const CLIENT_LOGOS = [
  {
    name: "Pro Tech International",
    src: "https://protechinternational.net/images/icon/new1.png",
    href: "https://protechinternational.net",
  },
  {
    name: "Kimberlite Chemicals",
    src: "https://kimberlitechemicals.com/img/kim/kimberlite%20.%20logo.png",
    href: "https://kimberlitechemicals.com",
  },
  {
    name: "World of Chemicals",
    src: "https://www.worldofchemicals.com/assets/img/woc-sus-logo.png",
    href: "https://www.worldofchemicals.com",
  },
  {
    name: "Arkaa Clusters",
    src: "https://arkaacluster.com/wp-content/uploads/2023/06/arkaa-cluster-logo.png",
    href: "https://arkaacluster.com",
  },
  {
    name: "ChemicalToday",
    src: "https://chemicaltoday.in/static/media/logo4.2dfecae919ca1ba0214c92c032106f60.svg",
    href: "https://chemicaltoday.in",
  },
  {
    name: "Promptitude",
    src: "https://promptitude.in/assets/img/logo.png",
    href: "https://promptitude.in",
  },
  {
    name: "Fortune HomeCare",
    src: "https://fortunehomecare.com/assets/images/logo-dark.svg",
    href: "https://fortunehomecare.com",
  },
];

const OurClientsSection = () => {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10">
          <span className="inline-block rounded-sm bg-lime-100 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-lime-600">
            OUR CLIENTS
          </span>
         <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
  <span className="text-lime-500">Trusted</span> by teams
  <br className="hidden sm:block" /> across industries.
</h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            From early-stage startups to established enterprises, we partner
            with product teams who care about quality, speed, and long-term
            impact.
          </p>
        </div>

        {/* Logos Infinite Scroll */}
        <div className="overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <div className="relative">
            <div className="flex animate-scroll gap-16">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex w-48 flex-shrink-0 flex-col items-center justify-center text-center"
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
                        className="h-16 w-auto max-w-[180px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                      />
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-slate-400">{client.name}</span>
                  )}

                  {/* Title under image */}
                  <p className="mt-3 text-sm font-medium text-slate-700">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
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
          animation: scroll 22s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OurClientsSection;
