import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        brand: {
          50: "#f2f7f5",
          100: "#e1ede8",
          200: "#c4ddd3",
          300: "#9ac4b5",
          400: "#6da493",
          500: "#4d8775",
          600: "#3b6c5e",
          700: "#30564c",
          800: "#28463e",
          900: "#1b382e",
          950: "#0c211a",
        },
        gold: {
          50: "#fbf8ec",
          100: "#f6eece",
          200: "#ecda9e",
          300: "#dfc169",
          400: "#d3a73c",
          500: "#b88a2c",
          600: "#9c6e24",
          700: "#7c5120",
          800: "#674220",
          900: "#57371f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
