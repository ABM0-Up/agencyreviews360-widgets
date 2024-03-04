/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)",
        xxl: "0 30px 35px -7px rgba(0, 0, 0, 0.08), 0 30px 35px -7px rgba(0, 0, 0, 0.08)",
      },
      outline: {
        blue: "2px solid rgba(0, 112, 244, 0.5)",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        darkGray: "#35373E",
        lightGray: "#797A7E",
        lighterGray: "#A5A6A9",
        lightestGray: "#DFDFDF",
        veryLightGray: "#F7F7F7",
        darkBlue: "#112E46",
        blue: "#5C98CB",
        black: "#161616",
        slate: "#F8FAFC",
        grayStroke: "#E7E7E7",
        red: "#FF2B2B",
        redLightBackground: "#FFEEEE",
        green: "#05B651",
        greenLightBackground: "#05B651",
      },
      fontSize: {
        xs: ["0.6875rem", { lineHeight: "1.5" }], // Equivalent to 11px with a 1.5 line height
        sm: ["0.8125rem", { lineHeight: "1.5715" }], // Equivalent to 13px with a 1.5715 line height
        base: ["0.875rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }], // Equivalent to 16px
        xl: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }], // Equivalent to 18px
        "2xl": ["1.25rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }], // Equivalent to 20px
        "3xl": ["1.5625rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }], // Equivalent to 25px
        "4xl": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }], // Equivalent to 30px
        "5xl": ["2.625rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }], // Equivalent to 42px
        "6xl": ["3.2813rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // Equivalent to 53px
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      backgroundImage: {
        nodeHandle: "url('/storage/background/node-handle.png')",
      },
    },
  },
  plugins: [],
};
