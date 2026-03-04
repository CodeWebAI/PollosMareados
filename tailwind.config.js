/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        fire: 'var(--color-fire)',
        'fire-light': 'var(--color-fire-light)',
        'fire-dark': 'var(--color-fire-dark)',
        wood: 'var(--color-wood)',
        'wood-light': 'var(--color-wood-light)',
        'wood-dark': 'var(--color-wood-dark)',
        smoke: 'var(--color-smoke)',
        ash: 'var(--color-ash)',
        gold: 'var(--color-gold)',
        'gold-light': 'var(--color-gold-light)',
        'gold-dark': 'var(--color-gold-dark)',
        sand: 'var(--color-sand)',
        stone: 'var(--color-stone)',
        earth: 'var(--color-earth)',
        cream: 'var(--color-cream)',
      },
      fontFamily: {
        display: "var(--font-display)",
        accent: "var(--font-accent)",
        body: "var(--font-body)",
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        medium: 'var(--shadow-medium)',
        strong: 'var(--shadow-strong)',
        fire: 'var(--shadow-fire)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        scale: 'scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
