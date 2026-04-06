import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/*/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        "primary-dark": "#6D28D9",
        "primary-light": "#F5F3FF",
        accent: "#F97316",
        "accent-dark": "#EA580C",
        surface: "#FAFAF9",
        card: "#FFFFFF",
        border: "#E7E5E4",
        foreground: "#1C1917",
        muted: "#78716C",
        "muted-bg": "#F5F5F4",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
