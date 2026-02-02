/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: "#0B0F19",
          light: "#F9FAFB",
        },
        surface: {
          dark: "#111827",
          light: "#FFFFFF",
        },
        accent: {
          purple: "#A78BFA",
          mint: "#5EEAD4",
          pink: "#F472B6",
          blue: "#60A5FA",
        },
      },
    },
  },
  plugins: [],
};

