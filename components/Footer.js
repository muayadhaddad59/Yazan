export default function Footer() {
  return (
    <footer className="bg-[#0E0A04] border-t border-[#C9943A]/15 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-accent text-[#C9943A] text-xl tracking-widest">THE STERLING CUT</p>
            <p className="font-body text-cream/30 text-xs tracking-[0.3em] mt-1">Est. 1987 · Stratford, Ontario</p>
          </div>

          {/* Ornamental center */}
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#C9943A]/30" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9943A" opacity="0.5">
              <path d="M12 2L13.5 8.5H20L14.5 12.5L16.5 19L12 15L7.5 19L9.5 12.5L4 8.5H10.5L12 2Z"/>
            </svg>
            <span className="w-10 h-px bg-[#C9943A]/30" />
          </div>

          <p className="font-body text-cream/20 text-xs text-center md:text-right">
            © {new Date().getFullYear()} The Sterling Cut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
