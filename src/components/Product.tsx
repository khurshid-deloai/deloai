import React from "react";

export default function ProductHighlights() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Product Highlights</h2>
        <p className="text-lg text-gray-600 mb-12">See all features →</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Communication & Social */}
          <div className="p-8 rounded-3xl bg-gray-50 shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Communication & Collaboration</h3>
            <p className="text-gray-600 mb-4">
              Build seamless communication between students, teachers, and parents with real-time updates and engagement tools.
            </p>
          </div>

          {/* Onboarding & Training */}
          <div className="p-8 rounded-3xl bg-gray-50 shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Onboarding, Learning & Training</h3>
            <p className="text-gray-600 mb-4">
              A structured, intuitive learning experience powered by smart content delivery and interactive modules.
            </p>
          </div>

          {/* Well-being & Retention */}
          <div className="p-8 rounded-3xl bg-gray-50 shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Student Engagement & Growth</h3>
            <p className="text-gray-600 mb-4">
              Track academic progress, participate in fun challenges like MathQuest, and stay motivated throughout the year.
            </p>
          </div>

          {/* Daily Operations */}
          <div className="p-8 rounded-3xl bg-gray-50 shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Daily Operations & School Workflow</h3>
            <p className="text-gray-600 mb-4">
              Simplify everyday tasks with digital tools for event management, communication, announcements, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}