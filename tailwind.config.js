/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Robot: ["Roboto Slab", "serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
