import React from "react";

export default function EmployeeBlog() {
  return (
    // Background wrapper
    <div className="bg-gray-5 min-h-screen  to-white py-20 lg:py-32">
      {/* Centered container */}
      <div className="max-w-7xl mx-auto bg-white shadow- p-8">
        {/* ---------------- HEADER TITLE ---------------- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

         {/* LEFT CONTENT */}
<div>
  {/* Category & Date at the top */}
  <div className="flex items-center space-x-3 text-sm text-gray-500 mb-6">
    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
      Engagement
    </span>
    <span>March 20, 2025</span>
  </div>

  {/* Blog Title & Subtitle */}
  <h1 className="text-4xl md:text-4xl font-bold leading-snug text-gray-900 font-aeonik">
    <span className="block">Why Employee</span>
    <span className="block">Engagement Matters</span>
    <span className="block">And How to Make It Thrive</span>
  </h1>

  <p className="mt-4 text-lg text-gray-700">
    Creating a Culture of Open Communication and Motivation in the Workplace
  </p>

  {/* Author Info */}
  <div className="flex items-center gap-3 mt-3 text-gray-600 text-sm">
    <img
      src="WhatsApp Image 2025-12-08 at 10.21.19 AM.jpeg"
      className="w-10 h-10 rounded-full object-cover"
    />
    <div>
      <p className="font-semibold text-gray-900">Harish M</p>
      <p className="text-xs text-gray-500">Employee Engagement Specialist</p>
    </div>
  </div>

  {/* Published Info */}
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
              src="blog_engagement_2_lg@2x.webp"
              alt="Employee engagement in the workplace"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* ---------------- PARAGRAPH ---------------- */}
{/* Article Content */}
<div className="flex justify-center w-full mt-20">
  <div className="text-gray-700 leading-relaxed space-y-6 max-w-3xl w-full">

    <p className="text-lg">
      Employee engagement is what helps businesses thrive. When employees feel motivated,
      connected, and valued, they contribute more to the organization's success. According to
      research, companies with highly engaged teams see a{' '}
      <strong>23% increase in profitability</strong> compared to those with disengaged employees.
    </p>

    <p className="text-lg">
      But engagement doesn't happen by accident—it requires intentional effort. One of the
      most effective ways to foster engagement is through two-way communication. When
      employees feel heard and involved, they become more invested in their work and the
      organization's mission.
    </p>

    {/* Section Title */}
    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
      The Power of Two-Way Communication
    </h2>

    <p className="text-lg">
      Traditional top-down communication can feel impersonal and disconnected. When
      employees don't have a voice, they may feel undervalued, leading to decreased
      motivation and higher turnover rates.
    </p>

    <p className="text-lg">
      Two-way communication, on the other hand, creates a culture where feedback flows in
      both directions. Employees can share ideas, raise concerns, and contribute to
      decision-making. This not only boosts engagement but also leads to better business
      outcomes, as employees on the ground often have valuable insights that leadership may
      overlook.
    </p>

    {/* Image Wider */}
    <div className="my-10 flex justify-center">
      <img
        src="blog_engagement_2_inline_lg@2x.webp"
        alt="Team collaboration and communication"
        className="rounded- shadow- w-[115%] max-w-4xl"
      />
    </div>

    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
      How to Foster Two-Way Communication
    </h2>

    <p className="text-lg mb-4">
      Creating an environment where two-way communication thrives requires consistent effort
      and the right tools. Here are some key strategies:
    </p>

    <ul className="space-y-4 text-lg list-disc pl-6">
      <li><strong>Make feedback easy and accessible</strong> – Employees should have multiple
      channels to share their thoughts.</li>
      <li><strong>Encourage open dialogue</strong> – Leaders should actively invite input and
      show that feedback is valued.</li>
      <li><strong>Use real-time communication tools</strong> – Instant messaging and forums
      help break barriers.</li>
      <li><strong>Follow up and take action</strong> – Communication should lead to change.</li>
    </ul>

    <div className="my-10 flex justify-center">
      <img
        src="blog_engagement_2_inline_2_lg@2x.webp"
        alt="Modern workplace communication"
        className="rounded- shadow- w-[115%] max-w-4xl"
      />
    </div>

    <p className="text-lg">
      By prioritizing communication and making it a core part of your company culture, you
      create an environment where employees feel valued, motivated, and committed to success.
    </p>
{/* Sources Section */}
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Sources</h3>
      <ul className="space-y-2 text-base">
        <li>
          <a
            href="#"
            className="text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            Gallup: State of the Global Workplace Report
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            Harvard Business Review: The Impact of Employee Engagement
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            Forbes: Why Two-Way Communication Matters in the Workplace
          </a>
        </li>
      </ul>
    </div>


  </div>
</div>


        
          

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
                  Engagement
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-emerald-600 transition-colors">
                  How to Build a Stronger Workplace Culture
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Discover practical strategies for creating an engaged and motivated workforce.
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- GET IN TOUCH SECTION ---------------- */}
       <section className="relative w-full py-24 mt-20 bg-white overflow-hidden">
  {/* CONTENT CENTER */}
  <div className="max-w-3xl mx-auto text-center px-4">
    <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
      Get your app in a few days.
      <br />
      <span className="relative">
        Let's get in touch!
        <span className="absolute left-0 right-0 -bottom-1 border-b-4 border-emerald-400 w-44 mx-auto"></span>
      </span>
    </h2>

    <p className="text-gray-600 text-lg mb-10">
      We love demonstrating our platform. Please don't hesitate to contact us if you're interested.
    </p>

    <button className="px-8 py-3 bg-emerald-400 text-gray-900 rounded-xl text-lg font-semibold shadow-md hover:bg-emerald-300 transition">
      Book a demo
    </button>
  </div>

  {/* FAINT BACKGROUND SHAPES - Optional */}
  <div className="pointer-events-none absolute inset-0 opacity-10 flex justify-between">
    <img
      src="/assets/bg-left.svg"
      alt=""
      className="h-full object-contain"
    />
    <img
      src="/assets/bg-right.svg"
      alt=""
      className="h-full object-contain"
    />
  </div>
</section>

      </div>
      </div>
    
    
  );
}
