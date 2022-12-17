/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "#9696A0",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
      height: {
        22: "5.5rem",
        84: "21rem",
      },
      width: {
        22: "5.5rem",
      },
      fontSize: {
        md: "0.95rem",
        "1.5xl": "1.375rem",
        "2.5xl": "1.675rem",
      },
      backgroundImage: {
        "shorten-mobile": "url('./images/bg-shorten-mobile.svg')",
        "boost-mobile": "url('./images/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [],
};
