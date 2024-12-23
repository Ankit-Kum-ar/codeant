/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 24px 0px rgba(8, 23, 53, 0.16)',
        'custom-xs': '0px 1px 2px 0px rgba(10, 13, 18, 0.05)',
        'skeumorphic': '0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset, 0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset, 0px 1px 2px 0px rgba(10, 13, 18, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
    }
  },
  plugins: [],
}