/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body": "#17171F",
        "body-gradient": "bg-gradient-to-bl from-teal-300 via-transparent to-rose-300",
        "selected-text": "#A3A3FF",
        "theme": "#3F3FFF",
        "nav": "#404053",
        "secondary": "#9191A4",
        "badge": "#3F3FFF",
        "input-border": "#565666",
        "input": "#2A2A35",
      },
    },
  },
  plugins: [],
};
