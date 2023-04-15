/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'md': {'min': '826px'},
      'lg': {'min': '1023px'},
    },
    extend: {
      screens: {
        'tablet': [{'min': '720px', 'max': '850px'},]
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
