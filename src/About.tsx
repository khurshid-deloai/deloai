import React from "react";

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white via-lime-50/30 to-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="inline-block rounded-full bg-lime-500 px-4 py-2 text-xs font-bold tracking-widest text-white shadow-lg">
            WHO WE ARE
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Transforming <span className="text-lime-500">Ideas</span> into
            <br />
            <span className="text-lime-500">Digital Reality</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-lime-500"></div>

          <p className="mx-auto mt-8 max-w-5xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            We are a software company focused on turning innovative ideas into
            powerful digital products. With a passion for clean design and
            scalable engineering, we help businesses grow through modern,
            user-centered technology.
          </p>

          <h3 className="mb-4 mt-10 text-2xl font-bold text-slate-900 lg:text-3xl">
            Our Approach
          </h3>

          <p className="mx-auto max-w-4xl text-base leading-relaxed text-slate-600 lg:text-lg">
            Every product is unique — and so is our process. We take time to
            understand your goals, then design and build tailored solutions that
            deliver clarity, efficiency, and real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
