import React, { useState } from "react";

type Category =
  | "All"
  | "Product Strategy"
  | "UX/UI Design"
  | "Web & App Development"
  | "AI & Automation"
  | "Hosting & Maintenance"
  | "Digital Marketing";

type CaseStudy = {
  id: number;
  title: string;
  client: string;
  category: Exclude<Category, "All">;
  description: string;
  outcome: string;
  services: string[];
  techStack: string[];
  year: string;
};

const categories: Category[] = [
  "All",
  "Product Strategy",
  "UX/UI Design",
  "Web & App Development",
  "AI & Automation",
  "Hosting & Maintenance",
  "Digital Marketing",
];

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "SaaS Analytics Platform Launch",
    client: "Northwave Analytics",
    category: "Product Strategy",
    description:
      "Helped a B2B SaaS startup define their MVP, prioritize features, and plan a scalable architecture for their analytics dashboard.",
    outcome:
      "Reduced time-to-market by 40% and aligned product roadmap with core business metrics.",
    services: ["Product Strategy", "Technical Scoping", "Feature Planning"],
    techStack: ["AWS", "PostgreSQL", "Node.js"],
    year: "2024",
  },
  {
    id: 2,
    title: "Finance App UX Redesign",
    client: "Finora",
    category: "UX/UI Design",
    description:
      "Redesigned the mobile app experience for a digital finance product, focusing on clarity, trust, and effortless navigation.",
    outcome:
      "Increased user task completion rate by 32% and reduced onboarding drop-offs by 18%.",
    services: ["UX Audit", "UI Design", "Design System"],
    techStack: ["Figma", "Design Tokens"],
    year: "2023",
  },
  {
    id: 3,
    title: "E-Commerce Platform Build",
    client: "UrbanNest",
    category: "Web & App Development",
    description:
      "Built a full-stack e-commerce platform with custom product catalog, checkout, and admin dashboard.",
    outcome:
      "Enabled the client to process 5x more orders with a stable and scalable architecture.",
    services: ["Web Development", "API Integration", "Admin Dashboard"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    year: "2024",
  },
  {
    id: 4,
    title: "AI Support Assistant",
    client: "HelioCare",
    category: "AI & Automation",
    description:
      "Implemented an AI-powered chat assistant to handle FAQs, appointment scheduling, and basic support queries.",
    outcome:
      "Automated ~60% of support tickets and improved average response time to under 15 seconds.",
    services: ["AI Chatbot", "Workflow Automation", "API Integration"],
    techStack: ["OpenAI API", "Node.js", "React", "Zapier"],
    year: "2024",
  },
  {
    id: 5,
    title: "Managed Cloud Hosting & Monitoring",
    client: "DocuStack",
    category: "Hosting & Maintenance",
    description:
      "Migrated legacy infrastructure to the cloud and set up a secure, monitored, and auto-scalable hosting environment.",
    outcome:
      "Achieved 99.95% uptime with proactive monitoring and automated backups.",
    services: ["Cloud Hosting", "Monitoring", "Security Hardening"],
    techStack: ["AWS", "Docker", "NGINX", "Prometheus"],
    year: "2023",
  },
  {
    id: 6,
    title: "Multi-Channel Product Launch Campaign",
    client: "Loomly Labs",
    category: "Digital Marketing",
    description:
      "Planned and executed a digital launch strategy across SEO, paid ads, and social media for a new SaaS product.",
    outcome:
      "Generated 1,500+ signups in the first 60 days and improved brand visibility in key markets.",
    services: ["SEO", "Paid Ads", "Content Strategy", "Landing Page CRO"],
    techStack: ["Google Ads", "Meta Ads", "GA4", "HubSpot"],
    year: "2024",
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredCaseStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeCategory);

  return (
    <section className="w-full bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Work we&apos;ve done at{" "}
              <span className="text-sky-400">Deloai Pvt Ltd</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl">
              From idea to launch and beyond — we help teams plan, design, build,
              automate, support, and grow their digital products.
            </p>
          </div>
          <div className="text-xs md:text-sm text-slate-400 max-w-xs md:text-right">
            Selected case studies highlighting{" "}
            <span className="text-sky-400">Product Strategy</span>,{" "}
            <span className="text-sky-400">UX/UI</span>,{" "}
            <span className="text-sky-400">Development</span>,{" "}
            <span className="text-sky-400">AI &amp; Automation</span>, hosting,
            and growth.
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={[
                  "px-3 py-1.5 rounded-full text-xs md:text-sm border transition-all",
                  isActive
                    ? "bg-sky-500/10 border-sky-500 text-sky-300 shadow-sm"
                    : "border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-900",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filteredCaseStudies.length === 0 ? (
          <div className="text-center py-10 text-slate-400 text-sm">
            No projects found in this category yet.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredCaseStudies.map((project) => (
              <article
                key={project.id}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-5 md:p-6 shadow-lg shadow-slate-950/40 hover:border-sky-500/60 hover:shadow-sky-900/40 transition-all"
              >
                {/* Top Row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-slate-50">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {project.client} · {project.year}
                    </p>
                  </div>
                  <span className="inline-flex items-center whitespace-nowrap rounded-full bg-sky-500/10 px-2.5 py-1 text-[10px] font-medium text-sky-300 ring-1 ring-sky-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-3">
                  {project.description}
                </p>

                {/* Outcome */}
                <div className="mb-4 rounded-xl bg-slate-900/70 border border-slate-800 px-3 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 mb-1">
                    Outcome
                  </p>
                  <p className="text-xs md:text-sm text-slate-200">
                    {project.outcome}
                  </p>
                </div>

                {/* Services & Tech Stack */}
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-medium text-slate-300 border border-slate-800"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:justify-end">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-slate-900/60 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-slate-800 pt-6">
          <div className="text-sm text-slate-300">
            Want to see how Deloai Pvt Ltd can help with your product?
          </div>
          <div className="flex gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors"
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium border border-slate-700 text-slate-200 hover:border-sky-500 hover:text-sky-300 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
