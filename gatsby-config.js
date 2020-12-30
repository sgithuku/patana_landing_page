module.exports = {
  siteMetadata: {
    title: 'Patana - Build better relationships',
    author: 'Shaun Githuku',
    description:
      'Patana is an app built to help you build better relationships',
    siteUrl: 'https://patana.app/',
  },
  pathPrefix: '/blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        // displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `patana.app`,
        customDomain: `stats.kelele.xyz/js/plausible.js?original=`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patana`,
        short_name: `Patana`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#161925`,
        display: `minimal-ui`,
        icon: `src/assets/Icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
