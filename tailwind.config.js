module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Salon palette
        salonBrown: '#6B4423',
        salonGold: '#D4AF37',
        hotPink: '#FF1493',
        cream: '#FFF8F0',
        slateDark: '#1E293B',
        // Shi-City Serve design tokens
        beige: '#F7F3EE',
        sage: '#8FAF8C',
        olive: '#5C7A55',
        darkText: '#1A1A1A',
        softBrown: '#7A6A5A',
        cardBg: '#FFFFFF',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #8B4513 0%, #DAA520 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}