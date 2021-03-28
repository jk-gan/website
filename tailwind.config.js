const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        blueGray: colors.blueGray,
      },
      borderColor: theme => ({
        cyan: theme(colors.cyan),
      }),
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            fontSize: "1.875rem",
            a: {
              textDecoration: "none",
              borderBottom: `2px solid ${theme("colors.cyan.400")}`,
              "&:hover": {
                color: theme("colors.cyan.400"),
              },
            },
            code: {
              backgroundColor: theme("colors.blueGray.100"),
              color: theme("colors.cyan.700"),
              fontWeight: "400",
              "border-radius": "0.25rem",
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem",
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem",
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
