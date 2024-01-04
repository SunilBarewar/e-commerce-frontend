/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#db4444",
        "dark-1": "#000000",
        "dark-2": "#7d8184",
        "white-1": "#ffffff",
        "white-2": "#f5f5f5",
        green: "#00d656",
      },
    },
  },
  plugins: [],
};
