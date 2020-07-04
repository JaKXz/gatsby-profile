const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Jason Kurian`,
    description: `My portfolio with Gatsby + Tailwind`,
    author: `@jakxz92`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jakxz-portfolio`,
        short_name: `jakxz-portfolio`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
        ].concat(
          process.env.NODE_ENV === `production` ? require(`cssnano`) : [],
        ),
      },
    },
    `gatsby-plugin-offline`,
  ],
};
