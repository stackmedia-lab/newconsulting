'use client'
import { useState } from 'react'

export default function QuickEnquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
        <div className="text-5xl">✅</div>
        <h4 style={{ fontFamily: "'Playfair Display',serif" }} className="text-white text-lg font-bold">
          Thank You!
        </h4>
        <p className="text-white/75 text-sm">Our counsellor will contact you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Full Name"
        required
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm outline-none focus:border-[#e8b84b] transition-colors"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        required
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm outline-none focus:border-[#e8b84b] transition-colors"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm outline-none focus:border-[#e8b84b] transition-colors"
      />
      <select
        className="w-full px-4 py-3 rounded-lg bg-[#1a3c6e] border border-white/20 text-white/80 text-sm outline-none focus:border-[#e8b84b] transition-colors"
      >
        <option value="">Select Destination</option>
        {['United Kingdom 🇬🇧', 'Australia 🇦🇺', 'Canada 🇨🇦', 'USA 🇺🇸', 'Germany 🇩🇪', 'Malaysia 🇲🇾'].map(d => (
          <option key={d}>{d}</option>
        ))}
      </select>
      <button
        type="submit"
        className="w-full bg-[#e8b84b] text-[#0f2444] font-bold py-3.5 rounded-xl hover:bg-[#f5d07a] transition-colors mt-1 cursor-pointer"
      >
        Get Free Counselling →
      </button>
    </form>
  )
}
