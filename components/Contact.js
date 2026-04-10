'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', service: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 dark-texture relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9943A]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-[#C9943A] text-xs tracking-[0.4em] uppercase mb-3">Reserve Your Chair</p>
          <h2 className="font-display text-cream text-5xl md:text-6xl italic mb-5">Book & Visit</h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9943A">
              <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Info */}
          <div>
            <h3 className="font-display text-cream text-2xl italic mb-8">Find Us</h3>

            <div className="space-y-7">
              {[
                {
                  label: 'Address',
                  lines: ['142 Main Street', 'Stratford, Ontario N5A 1C8'],
                },
                {
                  label: 'Hours',
                  lines: ['Mon – Fri: 8:00 AM – 7:00 PM', 'Saturday: 8:00 AM – 5:00 PM', 'Sunday: Closed'],
                },
                {
                  label: 'Phone',
                  lines: ['(519) 555 - 0147'],
                },
                {
                  label: 'Email',
                  lines: ['appointments@sterlingcut.com'],
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-5">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 flex items-center justify-center border border-[#C9943A]/40">
                      <div className="w-1.5 h-1.5 bg-[#C9943A]" />
                    </div>
                  </div>
                  <div>
                    <p className="font-body text-[#C9943A] text-xs tracking-[0.25em] uppercase mb-1">{item.label}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="font-body text-cream/60 text-sm leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div>
            {submitted ? (
              <div className="border border-[#C9943A]/40 p-10 text-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#C9943A" className="mx-auto mb-4">
                  <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z"/>
                </svg>
                <h3 className="font-display text-cream text-2xl italic mb-3">Request Received</h3>
                <p className="font-body text-cream/50 text-sm">We'll confirm your appointment within 24 hours. See you soon, gentleman.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-body text-[#C9943A] text-xs tracking-[0.25em] uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-[#C9943A]/25 px-4 py-3 font-body text-cream/80 text-sm focus:outline-none focus:border-[#C9943A]/70 transition-colors placeholder-cream/20"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block font-body text-[#C9943A] text-xs tracking-[0.25em] uppercase mb-2">Service</label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#1A1208] border border-[#C9943A]/25 px-4 py-3 font-body text-cream/80 text-sm focus:outline-none focus:border-[#C9943A]/70 transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option>The Classic Cut — $35</option>
                    <option>Hot Towel Shave — $45</option>
                    <option>Cut & Shave — $70</option>
                    <option>Beard Trim — $25</option>
                    <option>Boy's Cut — $20</option>
                    <option>Senior Cut — $28</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-[#C9943A] text-xs tracking-[0.25em] uppercase mb-2">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-transparent border border-[#C9943A]/25 px-4 py-3 font-body text-cream/80 text-sm focus:outline-none focus:border-[#C9943A]/70 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body text-[#C9943A] text-xs tracking-[0.25em] uppercase mb-2">Notes (optional)</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-[#C9943A]/25 px-4 py-3 font-body text-cream/80 text-sm focus:outline-none focus:border-[#C9943A]/70 transition-colors resize-none placeholder-cream/20"
                    placeholder="Any special requests or notes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9943A] text-[#1A1208] font-body text-xs tracking-[0.3em] uppercase hover:bg-[#E8A84A] transition-colors duration-300"
                >
                  Request Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
