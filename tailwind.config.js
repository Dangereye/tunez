/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',
        primary_hover: '#06b6d4',
      },
    },
  },
  plugins: [],
};
