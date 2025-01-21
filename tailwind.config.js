/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#AD4B57',
        secondary: '#3C1E2F',
        white: '#f8EAEE',
        white2: '#CBD5DF',
      },
    },
  },
  plugins: [],
}
