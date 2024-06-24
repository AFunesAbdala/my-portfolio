const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'darkerGrotesque' : ['Darker Grotesque', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translate(-15px, 0px)' },
          '100%': { opacity: '1' },
        },
        fadeInRight: {
          '0%': { display: 'none', opacity: '0', transform: 'translate(20px, 0px)', ease: 'easeOut' },
          '100%': { opacity: '1' },
        },
        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translate(0px, 5px)' },
          '100%': { opacity: '1' },
        },
        fadeInTop: {
          '0%': { opacity: '0', transform: 'translate(0px, -25px)', ease: 'easeOut' },
          '100%': { opacity: '1' },
        },
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(calc(-100% - 16px))' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s',
        fadeOut: 'fadeOut 1s',
        fadeInLeft1: 'fadeInLeft 0.8s',
        fadeInLeft2: 'fadeInLeft 1.4s',
        fadeInRight: 'fadeInRight 1.6s',
        fadeInTop1: 'fadeInTop 1s',
        fadeInTop2: 'fadeInTop 1.4s',
        fadeInTop3: 'fadeInTop 1.6s',
        fadeInTop4: 'fadeInTop 2s',
        fadeInTop5: 'fadeInTop 2.4s',
        fadeInBottom: 'fadeInBottom 1s',
        slide: 'slide 15s infinite linear'
      }
    },
  },
  plugins: [],
};
