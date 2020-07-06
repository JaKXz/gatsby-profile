// See https://tailwindcss.com/docs/configuration for details
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {},
  variants: {
    borderRadius: ["responsive", "before"],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require("@tailwindcss/custom-forms"),
    plugin(({ addVariant, e }) => {
      addVariant("before", ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => `.${e(`before${separator}${className}`)}:before`,
        );
      });
    }),
  ],
};
