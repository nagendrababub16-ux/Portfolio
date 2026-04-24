/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edf4ff',
          100: '#dee9ff',
          200: '#c4d7ff',
          300: '#9ebaff',
          400: '#7594ff',
          500: '#5266ff',
          600: '#353cfa',
          700: '#282be3',
          800: '#2126b8',
          900: '#1e2591',
        },
        background: {
          light: '#f8fafc',
          dark: '#020617',
        },
        surface: {
          light: '#ffffff',
          dark: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
