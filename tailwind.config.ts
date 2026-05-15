import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f7f5f0",
        "bg-2": "#ebe7dd",
        "bg-3": "#0a0a0a",
        fg: "#0a0a0a",
        "fg-2": "#8a867e",
        line: "#d8d3c5",
        "line-soft": "#e4dfd1",
      },
      fontFamily: {
        sans: ["'Inter Tight'", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        shell: "1480px",
      },
    },
  },
  plugins: [],
};

export default config;
