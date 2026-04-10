export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark-texture">
      {/* Decorative background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left corner flourish */}
        <svg className="absolute top-16 left-8 opacity-10" width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M10 190 L10 10 L190 10" stroke="#C9943A" strokeWidth="1"/>
          <path d="M25 190 L25 25 L190 25" stroke="#C9943A" strokeWidth="0.5"/>
          <circle cx="10" cy="10" r="4" fill="#C9943A"/>
        </svg>
        {/* Bottom-right corner flourish */}
        <svg className="absolute bottom-16 right-8 opacity-10 rotate-180" width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M10 190 L10 10 L190 10" stroke="#C9943A" strokeWidth="1"/>
          <path d="M25 190 L25 25 L190 25" stroke="#C9943A" strokeWidth="0.5"/>
          <circle cx="10" cy="10" r="4" fill="#C9943A"/>
        </svg>
        {/* Center radial lines */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <div className="w-[800px] h-[800px] rounded-full border border-[#C9943A]" />
          <div className="absolute w-[600px] h-[600px] rounded-full border border-[#C9943A]" />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-[#C9943A]" />
        </div>
      </div>

      {/* Barber pole strips - left side */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 opacity-60">
        <div className="barber-pole w-full h-full" />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1.5 opacity-60">
        <div className="barber-pole w-full h-full" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* EST badge */}
        <div className="inline-flex items-center gap-3 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="w-12 h-px bg-[#C9943A]/60" />
          <span className="font-body text-[#C9943A] text-xs tracking-[0.4em] uppercase">Est. 2026</span>
          <span className="w-12 h-px bg-[#C9943A]/60" />
        </div>

        {/* Main headline */}
        <h1
          className="font-display text-cream leading-none mb-2 animate-fadeInUp"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Abo Al Yazan
        </h1>
        <h2
          className="font-accent text-[#C9943A] tracking-[0.3em] mb-6 animate-fadeInUp"
          style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Cut & Shave
        </h2>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fadeIn" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="w-16 h-px bg-[#C9943A]/40" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#C9943A" opacity="0.8">
            <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z"/>
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9943A" opacity="0.5">
            <circle cx="12" cy="12" r="4"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#C9943A" opacity="0.8">
            <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z"/>
          </svg>
          <span className="w-16 h-px bg-[#C9943A]/40" />
        </div>

        <p
          className="font-body text-cream/60 text-sm md:text-base tracking-wide max-w-xl mx-auto leading-relaxed mb-10 animate-fadeInUp"
          style={{ animationDelay: '0.9s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Traditional craftsmanship. Precision cuts. Hot towel shaves.<br />
          Where every gentleman leaves looking his finest.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp"
          style={{ animationDelay: '1.1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a
            href="#contact"
            className="px-10 py-3.5 bg-[#C9943A] text-[#1A1208] font-body text-xs tracking-[0.3em] uppercase hover:bg-[#E8A84A] transition-colors duration-300 shadow-lg shadow-[#C9943A]/20"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-10 py-3.5 border border-cream/30 text-cream/70 font-body text-xs tracking-[0.3em] uppercase hover:border-[#C9943A] hover:text-[#C9943A] transition-all duration-300"
          >
            Our Services
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '1.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="text-cream/30 text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C9943A]/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
