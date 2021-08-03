// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
  siteMetadata: {
    title: "AutoShopPay",
    siteUrl: "http://www.autoshoppay.io",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AutoShopPay`,
        short_name: `AutoShopPay`,
        start_url: `/`,
        background_color: `#001233`,
        theme_color: `#0036FF`,
        display: `standalone`,
        icon: `./src/images/autoshoppay-icon.svg`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://www.autoshoppay.io/graphql",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
