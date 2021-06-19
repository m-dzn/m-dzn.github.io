const plugins = [
  `gatsby-plugin-sass`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/contents/blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 630,
            linkImagesToOriginal: true,
          },
        },
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        {
          resolve: `gatsby-remark-table-of-contents`,
          options: {
            tight: false,
            ordered: false,
            fromHeading: 1,
            toHeading: 3,
            className: "table-of-contents",
          },
        },
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            className: `anchor-header`,
            icon: false,
            maintainCase: false,
            removeAccents: true,
            elements: ["h1", "h2", "h3"],
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            showLineNumbers: true,
          },
        },
      ],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  // {
  //   resolve: `gatsby-plugin-google-analytics`,
  //   options: {
  //     trackingId: `ADD YOUR TRACKING ID HERE`,
  //   },
  // },
  // {
  //   resolve: `gatsby-plugin-feed`,
  //   options: {
  //     query: `
  //       {
  //         site {
  //           siteMetadata {
  //             title
  //             description
  //             siteUrl
  //             site_url: siteUrl
  //           }
  //         }
  //       }
  //     `,
  //     feeds: [
  //       {
  //         serialize: ({ query: { site, allMarkdownRemark } }) => {
  //           return allMarkdownRemark.nodes.map(node => {
  //             return Object.assign({}, node.frontmatter, {
  //               description: node.excerpt,
  //               date: node.frontmatter.date,
  //               url: site.siteMetadata.siteUrl + node.fields.slug,
  //               guid: site.siteMetadata.siteUrl + node.fields.slug,
  //               custom_elements: [{ "content:encoded": node.html }],
  //             });
  //           });
  //         },
  //         query: `
  //           {
  //             allMdx(
  //               sort: { order: DESC, fields: [frontmatter___date] },
  //             ) {
  //               nodes {
  //                 excerpt
  //                 html
  //                 fields {
  //                   slug
  //                 }
  //                 frontmatter {
  //                   title
  //                   date
  //                 }
  //               }
  //             }
  //           }
  //         `,
  //         output: "/rss.xml",
  //       },
  //     ],
  //   },
  // },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Gatsby Starter Blog`,
      short_name: `GatsbyJS`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-gatsby-cloud`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];

module.exports = plugins;
