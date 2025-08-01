import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors for tidepool theme
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
        },
        green: {
          500: '#22C55E',
          600: '#16A34A',
        },
        // Colors for dreamscape theme
        purple: {
          500: '#A855F7',
          600: '#9333EA',
        },
        pink: {
          500: '#EC4899',
          600: '#DB2777',
        },
        // Colors for firelight theme
        red: {
          500: '#EF4444',
          600: '#DC2626',
        },
        yellow: {
          500: '#EAB308',
          600: '#CA8A04',
        },
        // Colors for nightfall theme
        orange: {
          800: '#9A3412',
          900: '#7C2D12',
        },
      },
      fontFamily: {
        arvo: ['var(--font-arvo)', 'serif'],
        notoSans: ['var(--font-noto-sans)', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(0deg)'},
          '50%': {transform: 'rotate(10deg)'},
        },
        fadeIn: {
          '0%': {opacity: '0', transform: 'translateX(-10px)'},
          '100%': {opacity: '1', transform: 'translateX(0)'},
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 300ms ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
