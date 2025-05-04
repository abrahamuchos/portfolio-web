/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Instrument': ['InstrumentSans', 'sans-serif'],
        'GameOver': ['GameOverCre', 'sans-serif'],
        'Geist': ['GeistMono', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif']
      },
      colors:{
        'light-black': '#191918',
        'dark-black': '#11110f',
        'light-white': '#f1f0ef',
        'dirty-white': '#b5b3ad',
        'commands-gray': '#4c5056',
        'dark-gray': '#3b3a36',
        'border-gay': '#333',
      },
      backgroundImage: {
        'grid': "url('assets/images/grid-bg.svg')",
      }
    },
  },
  plugins: [],
}

