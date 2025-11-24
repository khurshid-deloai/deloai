import React from "react";
import ServiceCard from "./Cards/ServiceCard";
import planImage from "../assets/servicecards/plan.png";
import DigitalMarketingImage from "../assets/servicecards/digital_marketing.png";
import DevelopmentImage from "../assets/servicecards/development.png";
import HostingImage from "../assets/servicecards/hosting.png";
import UiUxImage from "../assets/servicecards/ui_ux.png";
import AiAutomationImage from "../assets/servicecards/ai_automation.png";
const services = [
  {
    label: "Plan",
    image: planImage,
    title: "Product Strategy",
    description:
      "Clear direction, feature planning, and technical scoping to set the right foundation before building.",
  },
  {
    label: "Design",
    image: UiUxImage,
    title: "UX/UI Design",
    description:
      "Modern, intuitive designs for websites, apps, and dashboards — focused on clarity and usability.",
  },
  {
    label: "Build",
    image: DevelopmentImage,
    title: "Web & App Development",
    description:
      "Full-stack development for websites, platforms, and mobile apps — built fast, stable, and scalable.",
  },
  {
    label: "Automate",
    image: AiAutomationImage,
    title: "AI & Automation",
    description:
      "Intelligent tools, automation workflows, and integrated AI features to enhance product performance.",
  },
  {
    label: "Support",
    image: HostingImage,
    title: "Hosting & Maintenance",
    description:
      "Secure hosting, updates, monitoring, bug fixes, and long-term product support — all handled for you.",
  },
  {
    label: "Grow",
    image: DigitalMarketingImage,
    title: "Digital Marketing",
    description:
      "Launch content, SEO, social presence, ads, and growth campaigns to help your product reach users quickly.",
  },
];


export default function ServiceSection() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            label={service.label}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
