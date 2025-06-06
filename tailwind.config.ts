// tailwind.config.ts (eller tailwind.config.js)
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#301705",
          dark: "#473222",
          accent: "#93817D",
          light: "#C9BDBC",
        },
        state: {
          button: "#6B4F43",
          accent: "#FEE89E",
          warning1: "#E888A8",
          warning2: "#A04930",
        },
        text: {
          base: "#301705",
          alt: "#473222",
          soft: "#93817D",
          light: "#C9BDBC",
        },
        background: {
          white: "#FFFFFF",
          light: "#F7F7F0",
          soft: "#FEF8FC",
          pale: "#EFF3FE",
        },
        gray: {
          light: "#E3E3E3",
          medium: "#CFCFCF",
          mid: "#BEBEBE",
          dark: "#A7A7A7",
        },
      },
      fontFamily: {
        sans: ['"Eina01"', "sans-serif"],
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    container: {
      center: false, 
      padding: "0rem",
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontFamily: "Eina01, sans-serif" },
      });
    }),
  ],
  animation: {
    scroll: "scroll 50s linear infinite",
  },
  keyframes: {
    scroll: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
  },
};

export default config;
