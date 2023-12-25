/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3bb54a",
        secondary: "#7ec341",
      },
      boxShadow: {
        btn: "0 0 10px #3bb54a",
      },
    },
  },
  plugins: [],
};
