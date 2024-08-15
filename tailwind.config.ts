import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: "#f5f0fa",
        primary: "#252422",
        secondary: "#403d39",
        tertiary: "#adb5bd",
        cta: {
          regular: "#560bad",
          hover: "#7209b7",
        },
        secondary_button: "#4361ee",
        highlight: "#e1e5f2",
      },
    },
  },
};

export default config;
