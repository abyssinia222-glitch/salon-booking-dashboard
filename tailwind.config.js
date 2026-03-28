module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Salon palette
        salonBrown: '#6B4423',     // Deep warm brown
        salonGold: '#D4AF37',      // Luxe gold 
        hotPink: '#FF1493',        // Bold CTA
        cream: '#FFF8F0',          // Soft bg
        slateDark: '#1E293B',      // Text
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #8B4513 0%, #DAA520 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif'],
      },
    },
  }
  plugins: [],
}