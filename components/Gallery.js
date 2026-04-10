const galleryItems = [
  { label: 'Classic Pompadour', size: 'tall' },
  { label: 'The Clean Fade', size: 'normal' },
  { label: 'Hot Towel Ritual', size: 'normal' },
  { label: 'The Shop', size: 'wide' },
  { label: 'Straight Razor', size: 'normal' },
  { label: 'Beard Craft', size: 'normal' },
]

const patterns = [
  // Comb pattern
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>
    <rect width='200' height='200' fill='%232C2416'/>
    <line x1='30' y1='60' x2='30' y2='140' stroke='%23C9943A' stroke-width='2' opacity='0.4'/>
    <line x1='45' y1='60' x2='45' y2='140' stroke='%23C9943A' stroke-width='1.5' opacity='0.3'/>
    <line x1='60' y1='60' x2='60' y2='140' stroke='%23C9943A' stroke-width='1.5' opacity='0.3'/>
    <line x1='75' y1='60' x2='75' y2='140' stroke='%23C9943A' stroke-width='1.5' opacity='0.3'/>
    <line x1='90' y1='60' x2='90' y2='140' stroke='%23C9943A' stroke-width='1.5' opacity='0.3'/>
    <line x1='105' y1='60' x2='105' y2='140' stroke='%23C9943A' stroke-width='1.5' opacity='0.3'/>
    <line x1='120' y1='60' x2='120' y2='140' stroke='%23C9943A' stroke-width='1.5' opacity='0.3'/>
    <line x1='135' y1='60' x2='135' y2='140' stroke='%23C9943A' stroke-width='1.5' opacity='0.3'/>
    <line x1='150' y1='60' x2='150' y2='140' stroke='%23C9943A' stroke-width='2' opacity='0.4'/>
    <line x1='28' y1='60' x2='152' y2='60' stroke='%23C9943A' stroke-width='3' opacity='0.6'/>
    <text x='100' y='175' font-family='serif' font-size='10' fill='%23C9943A' opacity='0.4' text-anchor='middle'>CLASSIC POMPADOUR</text>
  </svg>`,
  // Fade pattern
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>
    <rect width='200' height='200' fill='%231A1208'/>
    <circle cx='100' cy='90' r='50' fill='none' stroke='%23C9943A' stroke-width='1' opacity='0.2'/>
    <circle cx='100' cy='90' r='35' fill='none' stroke='%23C9943A' stroke-width='1' opacity='0.3'/>
    <circle cx='100' cy='90' r='20' fill='none' stroke='%23C9943A' stroke-width='1.5' opacity='0.5'/>
    <circle cx='100' cy='90' r='8' fill='%23C9943A' opacity='0.4'/>
    <text x='100' y='165' font-family='serif' font-size='10' fill='%23C9943A' opacity='0.4' text-anchor='middle'>THE CLEAN FADE</text>
  </svg>`,
  // Razor pattern
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>
    <rect width='200' height='200' fill='%23231A0E'/>
    <rect x='85' y='40' width='30' height='90' rx='2' fill='none' stroke='%23C9943A' stroke-width='1.5' opacity='0.5'/>
    <rect x='88' y='43' width='24' height='6' fill='%23C9943A' opacity='0.3'/>
    <line x1='100' y1='130' x2='100' y2='160' stroke='%23C9943A' stroke-width='2' opacity='0.4'/>
    <text x='100' y='185' font-family='serif' font-size='10' fill='%23C9943A' opacity='0.4' text-anchor='middle'>HOT TOWEL RITUAL</text>
  </svg>`,
  // Shop/chair pattern
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>
    <rect width='200' height='200' fill='%232C1A0E'/>
    <rect x='60' y='80' width='80' height='50' rx='5' fill='none' stroke='%23C9943A' stroke-width='1.5' opacity='0.4'/>
    <rect x='70' y='130' width='20' height='30' fill='none' stroke='%23C9943A' stroke-width='1' opacity='0.3'/>
    <rect x='110' y='130' width='20' height='30' fill='none' stroke='%23C9943A' stroke-width='1' opacity='0.3'/>
    <rect x='50' y='75' width='100' height='10' rx='3' fill='none' stroke='%23C9943A' stroke-width='1' opacity='0.5'/>
    <text x='100' y='175' font-family='serif' font-size='10' fill='%23C9943A' opacity='0.4' text-anchor='middle'>THE SHOP</text>
  </svg>`,
  // Scissors
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>
    <rect width='200' height='200' fill='%231A1208'/>
    <circle cx='75' cy='75' r='15' fill='none' stroke='%23C9943A' stroke-width='1.5' opacity='0.6'/>
    <circle cx='125' cy='75' r='15' fill='none' stroke='%23C9943A' stroke-width='1.5' opacity='0.6'/>
    <line x1='85' y1='85' x2='150' y2='145' stroke='%23C9943A' stroke-width='2' opacity='0.5'/>
    <line x1='115' y1='85' x2='50' y2='145' stroke='%23C9943A' stroke-width='2' opacity='0.5'/>
    <text x='100' y='175' font-family='serif' font-size='10' fill='%23C9943A' opacity='0.4' text-anchor='middle'>STRAIGHT RAZOR</text>
  </svg>`,
  // Beard
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>
    <rect width='200' height='200' fill='%23231A0E'/>
    <ellipse cx='100' cy='100' rx='45' ry='55' fill='none' stroke='%23C9943A' stroke-width='1.5' opacity='0.4'/>
    <ellipse cx='100' cy='80' rx='25' ry='30' fill='none' stroke='%23C9943A' stroke-width='1' opacity='0.3'/>
    <path d='M60 110 Q100 145 140 110' fill='none' stroke='%23C9943A' stroke-width='2' opacity='0.5'/>
    <text x='100' y='175' font-family='serif' font-size='10' fill='%23C9943A' opacity='0.4' text-anchor='middle'>BEARD CRAFT</text>
  </svg>`,
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-[#F0E9D8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-[#C9943A] text-xs tracking-[0.4em] uppercase mb-3">The Work</p>
          <h2 className="font-display text-[#1A1208] text-5xl md:text-6xl italic mb-5">Our Gallery</h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9943A">
              <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden cursor-pointer ${
                item.size === 'tall' ? 'row-span-2' : item.size === 'wide' ? 'col-span-2' : ''
              }`}
              style={{ aspectRatio: item.size === 'tall' ? '1/2' : item.size === 'wide' ? '2/1' : '1/1' }}
            >
              {/* Vintage photo placeholder with pattern */}
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("data:image/svg+xml,${patterns[i]}")`,
                  backgroundSize: 'cover',
                }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#1A1208]/0 group-hover:bg-[#1A1208]/60 transition-all duration-400 flex items-end p-5">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-px bg-[#C9943A] mb-2" />
                  <p className="font-display text-cream text-lg italic">{item.label}</p>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#C9943A]/40" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C9943A]/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
