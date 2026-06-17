import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand navy — pulled from the NB monogram (fill: navy)
        navy: {
          950: '#04101f',
          900: '#071a30',
          800: '#0a2342',
          700: '#103156',
          600: '#1c4a7a',
          500: '#2f6aa3',
        },
        // Champagne / fairway-gold accent for premium golf prestige
        champagne: {
          DEFAULT: '#C8A24B',
          light: '#E3CB87',
          deep: '#9C7A2E',
        },
        fairway: '#3F7D4E',
        bone: '#F7F5EF',
        sand: '#EFE9DC',
        mist: '#DDE4EC',
        // Light-theme text tokens (for white/cream content sections)
        ink: '#0A1A2F',
        slate: '#566375',
        line: '#E6E2D8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        accent: '0.18em',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both',
        shimmer: 'shimmer 6s linear infinite',
        'slow-zoom': 'slow-zoom 20s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
