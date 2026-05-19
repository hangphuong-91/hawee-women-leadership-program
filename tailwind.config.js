/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'navy-1': '#111144',
        'navy-2': '#231650',
        'navy-3': '#371D5D',
        'navy-4': '#4C256A',
        'navy-5': '#603079',
        'magenta-1': '#6A2F62',
        'magenta-2': '#773C89',
        'magenta-3': '#934882',
        'magenta-4': '#A75CA7',
        'hawee-pink': '#CB5184',
        'hawee-pink-dark': '#991B55',
        'hawee-pink-light': '#DC76B0',
        'hawee-pink-bright': '#F4B6D1',
        'gold-warm': '#F2A09D',
        'gold-main': '#D8A84F',
        'gold-dark': '#A98436',
        'text-light': '#F7F3FA',
        'text-secondary': '#C8BED8',
        primary: '#CB5184',
        'primary-dark': '#991B55',
        navy: '#111144',
        'govt-red': '#BE1E2D',
        gold: '#D8A84F',
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

