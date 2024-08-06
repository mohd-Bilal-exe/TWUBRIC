/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#181a1b",
        foreground: "#242628",
        border: "#3e3b45",
        copy: "#fbfbfb",
        "copy-light": "#d8d6dc",
        "copy-lighter": "#a49fac",

        success: "#3aed3a",
        warning: "#eded3a",
        error: "#ed3a3a",

        "success-content": "#032503",
        "warning-content": "#252503",
        "error-content": "#ffffff",

        backgroundLight: "#efeff1",
        foregroundLight: "#fbfbfb",
        borderLight: "#dedde2",

        copyLight: "#252329",
        "Lightcopy-light": "#645e6e",
        "Lightcopy-lighter": "#8a8495",
      },
    },
  },
  plugins: [],
};
