/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ddffb2',
          secondary: '#ddc53b',
          accent: '#6f6fed',
          neutral: '#212631',
          'base-100': '#fdfcfd',
          info: '#60c5e1',
          success: '#24bca6',
          warning: '#f79c40',
          error: '#e61a1d',
        },
      },
      'dracula',
    ],
  },
};
