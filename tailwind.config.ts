import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF1F6",
          100: "#D6E3ED",
          200: "#AEC8DC",
          300: "#86ADC9",
          400: "#5E91B6",
          500: "#3666A3",
          600: "#2C5485",
          700: "#234266",
          800: "#192F48",
          900: "#101D2A",
          950: "#09111A",
        },
        accent: {
          50: "#FFF6E5",
          100: "#FFECCB",
          200: "#FFD799",
          300: "#FFC367",
          400: "#FFB134",
          500: "#FF9E02",
          600: "#DB8100",
          700: "#B66500",
          800: "#914900",
          900: "#6C2E00",
          950: "#522200",
        },
      },
    },
  },
  plugins: [],
};

export default config;
