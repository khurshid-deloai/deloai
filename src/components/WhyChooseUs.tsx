import React from "react";
import { CheckCircle, Shield, Award, Users, Zap, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: <Shield className="w-8 h-8 text-lime-300" />,
    title: "Reliable & Secure",
    desc: "We follow industry-grade security, strong coding standards and reliable delivery practices.",
  },
  {
    icon: <Award className="w-8 h-8 text-lime-300" />,
    title: "Experienced Team",
    desc: "A highly skilled team with expertise in design, development and DevOps.",
  },
  {
    icon: <Users className="w-8 h-8 text-lime-300" />,
    title: "Client-Centric Approach",
    desc: "Your business goals shape every decision we make in the project lifecycle.",
  },
  {
    icon: <Zap className="w-8 h-8 text-lime-300" />,
    title: "Fast Delivery",
    desc: "Agile processes ensure faster builds, iterations and time-to-market.",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-lime-300" />,
    title: "Quality Guaranteed",
    desc: "Strict QA, automated tests and code reviews for reliable, clean results.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-lime-300" />,
    title: "End-to-End Support",
    desc: "We stay with you after launch for monitoring, improvement and maintenance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="min-w-full mx-auto px-4 py-16 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 py-16 text-gray-100">
        <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-lime-500 leading-snug mb-4">Why Us?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We provide unmatched value through expertise, communication and quality execution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {reasons.map((item, idx) => (
          <div key={idx} className="flex items-start gap-5 group cursor-default">
            <div className="w-14 h-14 m-4 p-4 flex items-center justify-center rounded-full bg-[#212121] group-hover:bg-[#3f403f] transition-colors duration-300 shadow-inner">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-lime-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
