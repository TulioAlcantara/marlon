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
        mobileSection2: "url('/images/section2/section-02-mobile.png')",
        tabletSection2: "url('/images/section2/section-02-tablet.png')",
      },
      fluidTypography: {},
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#F8F9FA",
      black: "#212529",
      gray: "#868E96",
      lightGray: "#a8a8a8",
    },
  },
  plugins: [
    require("tailwindcss"),
    require("precss"),
    require("autoprefixer"),
    require("tailwind-fluid-typography"),
  ],
};
