import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       gridTemplateColumns: {
        // Simple 16 column grid
        custom: "1fr auto",
        custom_2: "auto 1fr",
      },
      maxWidth: {
        custom: "1304px",
        custom_1: "1304px",
        custom_2: "1304px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
