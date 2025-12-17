import React from 'react'
import type { EmployeeCard as EC } from '../types/blog'

export default function EmployeeCard({ card }: { card: EC }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{card.name}</h3>
        <p className="text-sm text-gray-500">{card.role}</p>
        {card.excerpt && <p className="mt-2 text-gray-700 text-sm">{card.excerpt}</p>}
      </div>
    </article>
  )
}