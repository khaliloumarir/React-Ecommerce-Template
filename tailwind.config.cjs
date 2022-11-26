/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#1c1e2e",
        paragraph: "#4c527d",
        greenColor: "#223628",
      },
    },
  },
  plugins: [],
};
