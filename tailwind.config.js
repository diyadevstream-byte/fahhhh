/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#f5f5f5",
        accent: "#d4a373",
        furnworld: {
          dark: "#0a101e", // Existing Navy
          gold: "#a88e68", // Existing Gold
          beige: "#f5f0e6", // Warm Background
          brown: "#8c7b6c", // Soft Text/Border
          green: "#5a6c57", // Organic/Accent
          surface: "#ffffff", // Clean White
          muted: "#9ca3af", // Gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
