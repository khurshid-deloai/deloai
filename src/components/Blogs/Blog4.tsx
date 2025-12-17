import React from "react";

export default function SaaSPrinciplesBlog() {
  return (
    <div className="bg-gray-5 min-h-screen to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto bg-white shadow p-8">
        {/* HEADER */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center space-x-3 text-sm text-gray-500 mb-6">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
                SaaS
              </span>
              <span>March 20, 2025</span>
            </div>

            <h1 className="text-4xl md:text-4xl font-bold leading-snug text-gray-900 font-aeonik">
              <span className="block">What Makes a Good SaaS Product?</span>
              <span className="block">5 Principles We Believe In</span>
            </h1>

            <p className="mt-4 text-lg text-gray-700">
              The fundamentals that shape reliable, scalable, and user-centric software.
            </p>

            {/* AUTHOR */}
            <div className="flex items-center gap-3 mt-3 text-gray-600 text-sm">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Harish M</p>
                <p className="text-xs text-gray-500">Founder & Product Lead</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
              <span>Published on December 10, 2025</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full inline-block"></span>
              <span>6 min read</span>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001 2.5 2.5 0 01.01-5zm.02 7h-4v12h4v-12zm7.982 0h-3.982v12h3.982v-6.356c0-3.602 4.018-3.894 4.018 0v6.356h4v-7.616c0-6.675-7.656-6.423-8.018-3.138v-1.246z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
              alt="SaaS product illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* CONTENT */}
        <div className="flex justify-center w-full mt-20">
          <div className="text-gray-700 leading-relaxed space-y-6 max-w-3xl w-full">

            <p className="text-lg">
              Software-as-a-Service has transformed how teams work, collaborate, and scale.
              But not all SaaS products succeed. The best ones don’t rely on flashy features—they
              rely on strong fundamentals. Here are the 5 principles we believe every good SaaS
              product must follow.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. User-Centered Design</h2>
            <p className="text-lg">
              A good SaaS product solves a real problem for a real user. It avoids complexity,
              removes friction, and focuses on clarity. Great UX isn’t decoration—it’s the engine
              that determines whether users stay or churn.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Reliability & Performance</h2>
            <p className="text-lg">
              Downtime kills trust. Slow performance kills motivation. A dependable SaaS
              product must feel fast, stable, and predictable—even during peak loads. Users
              should never think about reliability; it should simply work.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Scalability by Design</h2>
            <p className="text-lg">
              Many products break when they grow. Great SaaS tools are built with future
              expansion in mind: modular architecture, clean APIs, and the ability to support
              thousands of users without re-engineering everything.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Security & Trust</h2>
            <p className="text-lg">
              Security is non-negotiable. A strong SaaS product protects user data with encryption,
              role-based access, secure authentication, and clear compliance practices. Trust is
              built through transparency and consistent protection.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Continuous Improvement</h2>
            <p className="text-lg">
              The best SaaS products evolve. They listen to user feedback, ship updates
              frequently, and improve without forcing users to "learn everything again."
              Progress should feel natural, not disruptive.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sources</h3>
              <ul className="space-y-2 text-base">
                <li>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                    McKinsey: SaaS Growth Principles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                    Gartner: Product Experience in Modern Software
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                    SaaStr: Why UX Wins Over Features
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MORE POSTS SECTION */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article key={item} className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${3182812 + item}/pexels-photo-${3182812 + item}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                    alt={`Related article ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs text-emerald-600 font-semibold uppercase">
                  SaaS
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-emerald-600 transition-colors">
                  Understanding Customer-Driven Product Roadmaps
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Learn how successful SaaS teams prioritize features.
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full py-24 mt-20 bg-white overflow-hidden">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              Build better software.
              <br />
              <span className="relative">
                Let's get in touch!
                <span className="absolute left-0 right-0 -bottom-1 border-b-4 border-emerald-400 w-44 mx-auto"></span>
              </span>
            </h2>

            <p className="text-gray-600 text-lg mb-10">
              Interested in modern SaaS development? We'd love to talk.
            </p>

            <button className="px-8 py-3 bg-emerald-400 text-gray-900 rounded-xl text-lg font-semibold shadow-md hover:bg-emerald-300 transition">
              Book a demo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}