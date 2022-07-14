/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        lg: "10px 10px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
