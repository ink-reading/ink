/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      transitionDuration: {
        400: "400ms",
      },
      colors: {
        ink: {
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          text: "rgb(var(--color-text) / <alpha-value>)",
          bg: "rgb(var(--color-bg) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
