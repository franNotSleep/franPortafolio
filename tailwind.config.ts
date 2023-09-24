import type { Config } from "tailwindcss";
import tailwindforms from "@tailwindcss/forms";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: ["retro"],
  },
  plugins: [tailwindforms, daisyui],
};
export default config;
