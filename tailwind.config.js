/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#717D8A',
        },
        'secondary': {
          DEFAULT: '#FEF6EE',
          'light': '#FEF6EE',
          'dark': '#A29588'
        }
      },
      fontFamily: {
        cookie: ['var(--font-cookie)'],
        'cream-candy': ['var(--font-cream-candy)'],
        juicebox: ['var(--font-juicebox)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
