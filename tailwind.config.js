/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'fadeInDown': 'fadeInDown 1.2s linear',
        'fadeInUP': 'fadeInUP 1.2s linear',
        'fadeInRight': 'fadeInRight 1.2s linear',
        'fadeInLeft': 'fadeInLeft 1.2s linear',
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInUP: {
          '0%': {
            opacity: '0',
            transform: 'translateY(1000px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-1000px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(1000px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      }
    },
    screens: {
      nx:"320px",
      mm:'375px',
      mx:"425px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      mc: "1020px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};