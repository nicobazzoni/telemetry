/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      animation: {
        'rotate': 'rotate 10s infinite linear',
        'slowRotate': 'slowRotate 20s infinite linear'
      },
    },
  },
  variants: {},
  plugins: [],
}

  


