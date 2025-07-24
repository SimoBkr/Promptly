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
        inter: ["var(--font-inter)", "sans-serif"],
        "plus-jakarta-sans": ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
      colors: {
        "background-rgb": "rgb(var(--background-rgb))",
        "text-rgb": "rgb(var(--text-rgb))",
        "primary-rgb": "rgb(var(--primary-rgb))",
        "primary-dark-rgb": "rgb(var(--primary-dark-rgb))",
        "card-background-rgb": "rgb(var(--card-background-rgb))",
        "border-rgb": "rgb(var(--border-rgb))",
      },
    },
  },
  plugins: [],
};
export default config;
