/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1CB0F6',
        secondary: '#C4ECFF',
        light: '#DDF4FF',
        dark: '#1899D6',
        longText: '#777777',
        lightText: '#AFAFAF',
        darkText: '#4B4B4B',
        borderLight: '#E5E5E5',
        darker: '#3B5998'
      },
      fontFamily: {
        righteousRegular: 'RighteousRegular',
        bubblegumSansRegular: 'BubblegumSansRegular'
      }
    },
  },
  plugins: [],
}