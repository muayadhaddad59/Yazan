const testimonials = [
  {
    name: 'Robert A.',
    since: 'Client since 2005',
    quote: 'Edmund has been cutting my hair for 20 years. There is no finer craftsman in the city — every visit feels like stepping back into a golden era of barbering.',
    stars: 5,
  },
  {
    name: 'Thomas C.',
    since: 'Client since 2018',
    quote: 'The hot towel shave at Sterling Cut is an experience I look forward to every month. It\'s not just a haircut — it\'s a ritual. Absolute perfection.',
    stars: 5,
  },
  {
    name: 'David M.',
    since: 'Client since 2012',
    quote: 'I\'ve traveled to barbershops across the country. None compare to the atmosphere and skill you find here. This place is a genuine institution.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-cream relative overflow-hidden">
      {/* Background detail */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-[#C9943A]/8" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-[#C9943A]/5" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="font-body text-[#C9943A] text-xs tracking-[0.4em] uppercase mb-3">Gentleman's Word</p>
          <h2 className="font-display text-[#1A1208] text-5xl md:text-6xl italic mb-5">Testimonials</h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9943A">
              <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={t.name} className="group relative p-8 bg-[#F0E9D8] border border-[#C9943A]/15 hover:border-[#C9943A]/40 transition-all duration-300">
              {/* Large quote mark */}
              <div className="absolute top-5 right-6 font-display text-6xl text-[#C9943A]/10 leading-none select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <svg key={si} width="12" height="12" viewBox="0 0 24 24" fill="#C9943A">
                    <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z"/>
                  </svg>
                ))}
              </div>

              <p className="font-body text-[#2C2416]/70 text-sm leading-relaxed italic mb-6">"{t.quote}"</p>

              <div className="border-t border-[#C9943A]/20 pt-4">
                <p className="font-display text-[#1A1208] text-base">{t.name}</p>
                <p className="font-body text-[#C9943A] text-xs tracking-widest uppercase mt-0.5">{t.since}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 border border-[#C9943A]/20">
          {[
            { num: '35+', label: 'Years of Service' },
            { num: '12k+', label: 'Happy Clients' },
            { num: '4.9★', label: 'Average Rating' },
          ].map((stat, i) => (
            <div key={stat.label} className={`py-8 text-center ${i !== 2 ? 'border-r border-[#C9943A]/20' : ''}`}>
              <p className="font-display text-[#C9943A] text-3xl md:text-4xl mb-1">{stat.num}</p>
              <p className="font-body text-[#6B4F2A]/60 text-xs tracking-[0.2em] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
