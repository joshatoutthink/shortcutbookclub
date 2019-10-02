require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log(`${process.env.WP_URL}`)
module.exports = {
  siteMetadata: {
    title: `Short Cut Book Club`,
    description: `A modern fiction book club that meets on short cut rd in Coleman falls, Va`,
    author: `Josh Kennedy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WP`,
        // This is field under which it's accessible
        fieldName: `wordpress`,
        // Url to query from
        url: `${process.env.WP_URL}`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source+Sans+Pro:300,400,400i,600,700`],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `short-cut-book-club`,
        short_name: `book club`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/book-club-logo-192x192.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
