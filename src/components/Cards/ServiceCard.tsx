import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  label?: string;
}

export default function ServiceCard({ image, title, description, label }: ServiceCardProps) {
  return (
    <div className="relative">
      {/* Empty div behind whole card */}
<div
  className="max-w-sm border-gray-300 absolute inset-0 bg-gray-100 z-0
             rotate-[-5deg] rounded-3xl"
></div>

      {/* Card */}
      <div className="max-w-sm rounded-3xl border border-gray-300 bg-white flex flex-col items-center space-y-4 relative z-10">

        <div className="relative w-full">
          {label && (
            <div className="absolute top-0 left-0 bg-black text-white text-sm font-semibold py-1.5 px-3 rounded-br-md z-10">
              {label}
            </div>
          )}

          <img
            src={image}
            alt={title}
            className="w-full h-56 md:h-64 object-cover rounded-xl p-2"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-800 text-center">{title}</h2>
        <p className="text-gray-600 text-center text-sm">{description}</p>
      </div>
    </div>
  )
}
