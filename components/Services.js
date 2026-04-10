const services = [
  {
    icon: '✂',
    name: 'The Classic Cut',
    desc: 'Scissor or clipper cut with hot towel finish and style.',
    price: '$35',
    duration: '45 min',
  },
  {
    icon: '🪒',
    name: 'Hot Towel Shave',
    desc: 'Traditional straight-razor shave with aromatic hot towels and skin conditioner.',
    price: '$45',
    duration: '60 min',
  },
  {
    icon: '💈',
    name: 'Cut & Shave',
    desc: 'Full haircut combined with a classic straight-razor hot towel shave.',
    price: '$70',
    duration: '90 min',
    badge: 'Popular',
  },
  {
    icon: '🧔',
    name: 'Beard Trim',
    desc: 'Shape, line, and condition your beard to perfection.',
    price: '$25',
    duration: '30 min',
  },
  {
    icon: '👦',
    name: "Boy's Cut",
    desc: 'Classic cuts for the young gentlemen, under 12.',
    price: '$20',
    duration: '30 min',
  },
  {
    icon: '👴',
    name: 'Senior Cut',
    desc: 'Classic cut with senior respect — ages 65 and over.',
    price: '$28',
    duration: '40 min',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-cream relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.025]">
        <span className="font-display text-[18rem] text-[#1A1208] leading-none">SC</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[#C9943A] text-xs tracking-[0.4em] uppercase mb-3">What We Offer</p>
          <h2 className="font-display text-[#1A1208] text-5xl md:text-6xl italic mb-5">Our Services</h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9943A">
              <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z"/>
            </svg>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="group relative bg-[#F0E9D8] border border-[#C9943A]/20 p-7 hover:border-[#C9943A]/60 hover:shadow-xl hover:shadow-[#C9943A]/10 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {s.badge && (
                <span className="absolute top-4 right-4 px-3 py-0.5 bg-[#C9943A] text-[#1A1208] font-body text-[10px] tracking-[0.25em] uppercase">
                  {s.badge}
                </span>
              )}

              {/* Top line accent */}
              <div className="w-8 h-0.5 bg-[#C9943A] mb-5 group-hover:w-14 transition-all duration-300" />

              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-display text-[#1A1208] text-xl mb-2">{s.name}</h3>
              <p className="font-body text-[#6B4F2A]/70 text-sm leading-relaxed mb-5">{s.desc}</p>

              <div className="flex items-center justify-between border-t border-[#C9943A]/20 pt-4 mt-auto">
                <span className="font-display text-[#C9943A] text-2xl">{s.price}</span>
                <span className="font-body text-[#6B4F2A]/50 text-xs tracking-widest uppercase">{s.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
