/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      transitionDuration: {
        400: "400ms",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        ink: {
          DEFAULT: "#737373",
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#737373",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#313131",
          950: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#ea6c61",
          50: "#fdf4f3",
          100: "#fde5e3",
          200: "#fcd0cc",
          300: "#f8afa9",
          400: "#f28177",
          500: "#ea6c61",
          600: "#d43b2e",
          700: "#b22e23",
          800: "#932a21",
          900: "#7b2821",
          950: "#42110d",
        },
      },
    },
  },
  plugins: [],
};
