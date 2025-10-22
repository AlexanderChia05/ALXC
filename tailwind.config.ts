import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        fg: "#E6E6E6",
        muted: "#A3A3A3",
        edge: "#7A7A7A"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: { glow: "0 0 30px rgba(255,255,255,0.06)" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-1%, -1%)" },
          "20%": { transform: "translate(1%, -1%)" },
          "30%": { transform: "translate(-2%, 1%)" },
          "40%": { transform: "translate(2%, 2%)" },
          "50%": { transform: "translate(1%, -2%)" },
          "60%": { transform: "translate(-1%, 2%)" },
          "70%": { transform: "translate(2%, 1%)" },
          "80%": { transform: "translate(-2%, -1%)" },
          "90%": { transform: "translate(1%, 2%)" }
        }
      },
      animation: { float: "float 3s ease-in-out infinite", grain: "grain 6s steps(10) infinite" }
    },
  },
  plugins: [],
} satisfies Config;
