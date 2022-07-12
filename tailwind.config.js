/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        md: "10px 10px 0px -3px rgba(0, 0, 0, 1)",
        lg: "10px 10px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
