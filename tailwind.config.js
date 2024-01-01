/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    supports: {
      firefox: "-moz-appearance:none",
    },
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
      spacing: {
        18: "4.5rem",
        "safe-area-b": "calc(env(safe-area-inset-bottom, 28px) - 8px)",
      },
    },
  },
  plugins: [],
};
