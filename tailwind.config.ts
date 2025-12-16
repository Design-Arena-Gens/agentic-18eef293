import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f9ff",
          100: "#e6f2ff",
          200: "#bfdeff",
          300: "#99c9ff",
          400: "#4da0ff",
          500: "#0077ff",
          600: "#006be6",
          700: "#0055b4",
          800: "#003f82",
          900: "#003069"
        }
      },
      boxShadow: {
        subtle: "0 10px 30px -18px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
