/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '760px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1080px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1440px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '2160px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
