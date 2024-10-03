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
        dark: '#1899D6',
        longText: '#777777'
      },
      fontFamily: {
        righteousRegular: 'RighteousRegular'
      }
    },
  },
  plugins: [],
}