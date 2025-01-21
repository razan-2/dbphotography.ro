/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1A1A1A', // Very dark background
          light: '#2A2A2A', // Slightly lighter dark for buttons
        },
        gray: {
          700: '#3A3A3A', // Input border
          400: '#9A9A9A', // Secondary text
        },
        gold: {
          DEFAULT: '#D4AF37', // Golden accent
        },
      },
    },
  },
  plugins: [],
}

