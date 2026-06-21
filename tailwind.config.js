/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0b0e14',
        'dark-card': '#161923',
        'france-blue': '#0055ff',
        'france-red': '#ff2e4c',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 85, 255, 0.4)',
        'glow-hover': '0 0 30px rgba(0, 85, 255, 0.7)',
      }
    },
  },
  plugins: [],
}
