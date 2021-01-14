/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Rahul Roy Portfolio",
    description: "This is Rahul Roy's Portfolio Site",
    author: "@rahulRoy",
    twitterUsername: "@RahulRoy11705",
    image: "/twitter-img.png",
    siteUrl: "https://roydadevboy.netlify.app",
    favicon: "/favicon.ico"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 10000,
        contentTypes: [`experiences`,`projects`, `blogs`],
        singleTypes: ['about'],
      },
    },
  ],
}
