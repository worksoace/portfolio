/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3B82F6",
          foreground: "#CCD9F6",
          dark: "#059669",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0) rotate(-5deg) scale(1)" },
          "50%": { transform: "translateY(-20px) rotate(0deg) scale(1.15)" },
        },
        floatDown: {
          "0%, 100%": { transform: "translateY(0) rotate(5deg) scale(1)" },
          "50%": { transform: "translateY(20px) rotate(0deg) scale(1.15)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(3deg)" },
          "75%": { transform: "rotate(-3deg)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp .5s ease-out both",
        floatUp: "floatUp 2s ease-in-out infinite",
        floatDown: "floatDown 2s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
