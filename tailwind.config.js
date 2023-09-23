/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ["Lobster", "cursive"],
      navbartext: ["Lato", "sans-serif"]
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'heading': '180px',
      'subheading': '56px'
    },
    colors: {
      'navbar': '#ffff',
      'headingcolor': '#003859',
      'black': '#000',
      'hovercolor': '#8d99ae',
      'cardcolor': '#003049'
    },
    extend: {
      spacing: {
        '12\%': '12%', // p-80% - doesn't work
      }
    }
  },
  plugins: [],
}

