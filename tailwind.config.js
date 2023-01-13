const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./assets/css/**/*",
  ],
  theme: {
    fontFamily: {
      "cera-pro": ["Lato", "cera-pro", "ui-sans-serif", "system-ui"],
      "cera-round-pro": [
        "Lato",
        "cera-round-pro",
        "ui-sans-serif",
        "system-ui",
      ],
      ...defaultTheme.fontFamily,
      //
      backgroundSize: {
        "20%": "20%",
        "50%": "50%",
        ...defaultTheme.backgroundSize,
      },
    },
    extend: {
      colors: {
        /*"new-sky": "#163142",
        "new-gray": "#eaeaea",
        secondary: "#2c4f58",
        cricket: "#8c1000",
        tennis: "#80d237",*/
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        highlights: "var(--highlights)",
        "main-background": "var(--main-background)",
        "btn-text-color": "var(--btn-text-color)",
        "in-play-block-color": "var(--in-play-block-color)",
        "cta-primary-darken": "var(--cta-primary-darken)",
      },
    },
    screens: {
      xs: { max: "420px" },
      ...defaultTheme.screens,
      /*sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }*/
    },
  },
  plugins: [],
};
