/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1ed760',
        primary_hover: '#1abd53',
      },
    },
  },
  plugins: [],
};
