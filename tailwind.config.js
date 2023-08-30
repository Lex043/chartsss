/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#341539',
        pink: '#ff536e',
        purpleBorder: '#341539a0',
      },
      fontFamily: {
        Work: ['Work Sans', 'sans-serif'],
        Arapey: ['Arapey', 'serif'],
      },
    },
  },
  plugins: [],
};
