'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Services', 'Barbers', 'Gallery', 'Testimonials', 'Contact']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1A1208]/95 backdrop-blur-sm shadow-lg border-b border-[#C9943A]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start group">
          <span className="font-accent text-2xl text-[#C9943A] leading-none tracking-widest">THE STERLING</span>
          <span className="font-display text-xs text-cream/60 tracking-[0.4em] uppercase mt-0.5">Cut & Shave</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`gold-link font-body text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
                  scrolled ? 'text-cream/70 hover:text-[#C9943A]' : 'text-cream/80 hover:text-[#C9943A]'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 border border-[#C9943A] text-[#C9943A] font-body text-xs tracking-[0.25em] uppercase hover:bg-[#C9943A] hover:text-[#1A1208] transition-all duration-300"
        >
          Book Now
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-px bg-[#C9943A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[#C9943A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#C9943A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#1A1208]/98 border-t border-[#C9943A]/20 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 py-6' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center gap-6">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-cream/70 hover:text-[#C9943A] font-body text-xs tracking-[0.3em] uppercase transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="px-6 py-2 border border-[#C9943A] text-[#C9943A] text-xs tracking-widest uppercase hover:bg-[#C9943A] hover:text-ink transition-all">
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
