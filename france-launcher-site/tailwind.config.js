/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fond sombre typé Lunar/OperaGX (Bleu très foncé/anthracite)
        'dark-bg': '#0b0e14',
        // Couleur des cartes et sections en relief
        'dark-card': '#161923',
        // Bleu néon / électrique pour les boutons et accents
        'france-blue': '#0055ff',
        // Rouge éclatant pour la touche française
        'france-red': '#ff2e4c',
      },
      fontFamily: {
        // On utilisera Poppins ou Inter pour le côté moderne
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        // Effet de lueur (glow) pour les boutons de téléchargement
        'glow-blue': '0 0 20px rgba(0, 85, 255, 0.4)',
        'glow-hover': '0 0 30px rgba(0, 85, 255, 0.7)',
      }
    },
  },
  plugins: [],
}