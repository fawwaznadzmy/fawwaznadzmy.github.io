const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './**/*.html'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              padding: "0",
              color: "#1F2933",
              backgroundColor: "#F3F3F3"
            },
            code: {
              padding: "0.2em 0.4em",
              backgroundColor: "#F3F3F3",
              color: "#DD1144",
              fontWeight: "400",
              "border-radius": "0.25rem"
            },
            "code::before": false,
            "code::after": false,
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      },
      colors: {
        primary: "#1a1a1b",//"#00040f",
        secondary: "#00f6ff",
        card: "#141414",
        game: "#0067dc",
        main: "#430d79",
        active: "#740cdc",
        contain: "#241d41",
        third:"#2c3599",
        highlight: "#65d6ea",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        consola: ["consola", "cursive"],
        pixel: ["pixel"],
        toronto: ["toronto"],
        coleco: ["coleco"],
        hackbot: ["hackbot"]
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}