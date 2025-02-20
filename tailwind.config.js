/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
    extend: {
     translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
         'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
   }  },
  plugins: [],
 };