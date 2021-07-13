module.exports = {
  siteMetadata: {
    title: "AutoShopPay",
    siteUrl: `http://www.autoshoppay.local`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://autoshoppay.local/graphql",
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
