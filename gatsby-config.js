module.exports = {
  siteMetadata: {
    title: `aleph-csv`,
    description: `Aleph CSV`,
  },
  pathPrefix: "/aleph-csv",
  plugins: [
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
  ],
}
