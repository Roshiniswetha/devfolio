/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          white:{
            DEFAULT: '#fff'
          },
          gray: {
            200: '#D5DAE1',
            500: '#003f26',
          },
          black: {
            DEFAULT: '#000',
            500: '#1D2235',
          },
          blue: {
            500: '#2b77e7',
          },
          orange:{
            500: '#ffa600',
          },
          skyBlue:{
            500: '#3fd89c',
          },
          yellow: {
            500: '#d8ff60',
          },
          purple:{
            500: '#f1c8f1',
          },
          lightBlue:{
            500:'#e5ebe7',
          },
          lightGreen:{
            500: '#c3feac',
          },
          teal:{
            500: '#9b0094',
          },
          darkTeal:{
            500: '#06002f',
          },
          burgendy:{
            500: '#b90c4c',
          }
        },
        fontFamily: {
          worksans: ['Work Sans', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
        boxShadow: {
          card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    plugins: [],
  };
  