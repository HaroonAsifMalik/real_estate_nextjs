/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': {
          DEFAULT: '#FF5722',
          '50': '#FFE9E0',
          '100': '#FFC6B3',
          '200': '#FF9573',
          '300': '#FF6A42',
          '400': '#FF3F20',
          '500': '#E64A19',
          '600': '#D84315',
          '700': '#BF360C',
          '800': '#A82B09',
          '900': '#8D2207',
        },
      },
    },
  },
  plugins: [],
}