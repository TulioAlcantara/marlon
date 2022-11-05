/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Raleway"],
        body: ["Manrope"],
      },
      backgroundImage: {
        hero: "url('/images/bg-hero.jpg')",
      },
    },
  },
  plugins: [],
};
