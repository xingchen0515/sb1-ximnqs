/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "radial-gradient(#fff 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '16px 16px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}