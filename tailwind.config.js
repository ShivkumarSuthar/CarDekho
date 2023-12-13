/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/dist/assets/componets/*.{html,jsx,js,ts}"],

  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        alegrega: ["Alegreya Sans", "sans-serif"],
        DMplay: ["DM Serif play", "serif"],
        Kalnia: ["Kalnia", "serif"],
        Raleway: ["Raleway", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        century:['century gothic'],
        hertical:['hertical'],
        libre:['Libre Baskerville', 'serif'],
      },
      colors: {
        primary: '#3498db', // Blue
        secondary: '#e74c3c', // Red
        accent: '#2ecc71',   // Green
        neutral: '#bdc3c7',   // Gray
        background: '#ecf0f1', // Light Gray
    },
  },
  plugins: [],
},
};
