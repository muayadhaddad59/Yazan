const barbers = [
  {
    name: 'Edmund Sterling',
    role: 'Master Barber & Founder',
    exp: '35 years experience',
    specialty: 'Classic cuts, straight-razor shaves',
    initials: 'ES',
    color: '#8B3A1A',
  },
  {
    name: 'Marcus Holloway',
    role: 'Senior Barber',
    exp: '18 years experience',
    specialty: 'Fades, beard sculpting',
    initials: 'MH',
    color: '#6B4F2A',
  },
  {
    name: 'James Whitfield',
    role: 'Barber',
    exp: '8 years experience',
    specialty: 'Modern classics, hot towel shaves',
    initials: 'JW',
    color: '#2C2416',
  },
]

export default function Barbers() {
  return (
    <section id="barbers" className="py-28 dark-texture relative overflow-hidden">
      {/* Decorative dashes */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9943A]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9943A]/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-[#C9943A] text-xs tracking-[0.4em] uppercase mb-3">The Craftsmen</p>
          <h2 className="font-display text-cream text-5xl md:text-6xl italic mb-5">Meet the Barbers</h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9943A">
              <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {barbers.map((b) => (
            <div key={b.name} className="text-center group">
              {/* Avatar */}
              <div className="relative w-36 h-36 mx-auto mb-6">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-[#C9943A]/30 group-hover:border-[#C9943A]/80 transition-colors duration-500" />
                {/* Inner ring */}
                <div className="absolute inset-3 rounded-full border border-[#C9943A]/20 group-hover:border-[#C9943A]/40 transition-colors duration-500" />
                {/* Avatar circle */}
                <div
                  className="absolute inset-3 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: b.color }}
                >
                  <span className="font-accent text-cream text-3xl">{b.initials}</span>
                </div>
                {/* Gold corner dots */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C9943A] opacity-60" />
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C9943A] opacity-60" />
              </div>

              <h3 className="font-display text-cream text-xl mb-1">{b.name}</h3>
              <p className="font-body text-[#C9943A] text-xs tracking-[0.2em] uppercase mb-3">{b.role}</p>
              <p className="font-body text-cream/40 text-xs mb-3">{b.exp}</p>
              <div className="w-8 h-px bg-[#C9943A]/40 mx-auto mb-3 group-hover:w-16 transition-all duration-300" />
              <p className="font-body text-cream/50 text-xs italic">{b.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
