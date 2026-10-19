/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        md: '428px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px',
      },
      minWidth: {
        touch: '44px',
      },
      minHeight: {
        touch: '44px',
      },
      spacing: {
        touch: '44px',
      },
    },
  },
  plugins: [],
};
