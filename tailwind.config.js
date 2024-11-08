/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-white': '0 1px 3px rgba(255, 255, 255, 0.048)', // Custom shadow
      },
    },
  },
  plugins: [],
}