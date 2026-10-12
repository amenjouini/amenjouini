import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "2rem", lg: "3rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
        mono: ['"Geist Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        raised: "rgb(var(--raised) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        signal: {
          DEFAULT: "rgb(var(--signal) / <alpha-value>)",
          deep: "rgb(var(--signal-deep) / <alpha-value>)",
        },
        line: "rgb(var(--ink) / 0.14)",
      },
      borderColor: {
        DEFAULT: "rgb(var(--ink) / 0.14)",
      },
      boxShadow: {
        frame: "0 1px 0 rgb(20 19 16 / 0.04), 0 24px 48px -24px rgb(20 19 16 / 0.3)",
        lift: "0 40px 80px -40px rgb(20 19 16 / 0.5)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(2.4)", opacity: "0" },
        },
        flow: {
          to: { strokeDashoffset: "-24" },
        },
      },
      animation: {
        "pulse-dot": "pulseDot 2.4s ease-out infinite",
        flow: "flow 1.2s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
