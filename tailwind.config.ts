import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        "proxima-nova": ["Proxima Nova", "sans-serif"],
      },
      colors: {
        primary: "#2D91FE",
        secondary: "#4BDFFF",
        orange: "#FF6769",
        yellow: "#FFC359",
        darkblue: "#0D0F52",
        "light-green": "#80CB17",
        'light-gray': '#E5E5F3',
      },
    },
  },
  plugins: [],
};
export default config;
