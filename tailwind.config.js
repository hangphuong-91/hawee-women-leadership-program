/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C9187F',
        'primary-dark': '#50002F',
        navy: '#1A2F5A',
        'govt-red': '#BE1E2D',
        gold: '#C9A84C',
        cream: '#FCEDF4',
        dark: '#1A1A1A',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['MonaSans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

