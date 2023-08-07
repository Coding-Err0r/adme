/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const FlipClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".leftToRight": {
      transform: "rotateY(180deg)",
    },
    ".rightToLeft": {
      transform: "rotateY(-180deg)",
    },
    ".topToBottom": {
      transform: "rotateX(-180deg)",
    },
    ".bottomToTop": {
      transform: "rotateX(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sunflower: ["Sunflowe", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [FlipClass],
};
