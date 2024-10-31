/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medina: ['Medina', 'sans-serif'],
        general: ["Chakra Petch", 'sans-serif']
      }
    },
  },
  plugins: [],
}

