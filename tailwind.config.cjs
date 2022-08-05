/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorprimary: "#164E63",
        whiteopacity: "rgb(255,255,255,0.2)",
      },
    },
  },
  plugins: [],
};
