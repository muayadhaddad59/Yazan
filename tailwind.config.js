/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-libre)', 'serif'],
        accent: ['var(--font-italiana)', 'serif'],
      },
      colors: {
        cream: '#F5F0E8',
        parchment: '#E8DCC8',
        ink: '#1A1208',
        sepia: '#6B4F2A',
        gold: '#C9943A',
        rust: '#8B3A1A',
        charcoal: '#2C2416',
      },
    },
  },
  plugins: [],
}
