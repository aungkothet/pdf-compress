/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: {
        200: '#EBF5FF',
        400: '#61A1FF',
        500: '#3C7EE9',
        600: '#2769D6',
        700: '#576E8D',
      },
      neutral: {
        600: '#B4B4B4',
        700: '#464646',
        800: '#1A1A1A',
        900: '#000000',
      },
      secondary: {
        500: '#F6A85B',
        600: '#D7802F',
      },
      error: {
        600: '#FB5A5F',
      },
      extra: {
        1: '#FFBC08',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
