/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#2c3e50',
        'secondary': '#16a085',
        'tertiary': '#e67e22',
      },
      // keyframes: {
      //   captionUp: {
      //     '0%': { transform: 'translateY(20rem)' },
      //     '100%': { transform: 'translateY(0)' },
      //   },
      //   captionDown: {
      //     '0%': { transform: 'translateY(0)' },
      //     '100%': { transform: 'translateY(20rem)' },
      //   },
      // },
      // animation: {
      //   'caption-up': 'captionUp 0.5s ease-in-out forwards',
      //   'caption-down': 'captionDown 0.5s ease-in-out forwards',
      // },
    },
  },
  plugins: [],
}
