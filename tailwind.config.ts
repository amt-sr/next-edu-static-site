import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scan all frontend files in `src`
  ],
  theme: {
    extend: {
      // You can customize theme here, like fonts, colors, etc.
    },
  },
  plugins: [],
};

export default config;
