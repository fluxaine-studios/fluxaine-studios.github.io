/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          bg: '#0F172A',
          primary: '#14B8A6',
          secondary: '#38BDF8',
          accent: '#F59E0B',
          text: '#E5E7EB',
        },
      },
    },
  },
  plugins: [],
};
