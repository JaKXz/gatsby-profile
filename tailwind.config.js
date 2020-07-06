// See https://tailwindcss.com/docs/configuration for details
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    gradients: (theme) => ({
      "dark-to-light-blue": [
        "135deg",
        `${theme("colors.blue.900")} 0%`,
        `${theme("colors.blue.900")} 30%`,
        `${theme("colors.blue.300")} 100%`,
      ],
    }),
  },
  variants: {
    borderRadius: ["responsive", "before"],
    gradients: ["responsive", "hover"],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require("tailwindcss-plugins/gradients"),
    require("@tailwindcss/custom-forms"),
    plugin(({ addVariant, e }) =>
      addVariant("before", ({ modifySelectors, separator }) =>
        modifySelectors(
          ({ className }) => `.${e(`before${separator}${className}`)}:before`,
        ),
      ),
    ),
  ],
};
