module.exports = [
  "gatsby-plugin-sass",
  "gatsby-plugin-image",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
    __key: "images",
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
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wraperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-prismjs`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
  {
    resolve: `gatsby-plugin-feed-mdx`,
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map((edge) => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url:
                  site.siteMetadata.siteUrl + "/blog" + edge.node.fields.slug,
                guid:
                  site.siteMetadata.siteUrl + "/blog" + edge.node.fields.slug,
                custom_elements: [
                  {
                    "content:encoded": edge.node.html,
                  },
                ],
              });
            });
          },
          query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                        title
                        date
                    }
                  }
                }
              }
            }
          `,
          output: `/rss.xml`,
          title: `Your Site's RSS Feed`,
          match: `^/blog/`,
        },
      ],
    },
  },
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-gatsby-cloud",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: "./src/pages/",
    },
    __key: "pages",
  },
  // {
  //   resolve: "gatsby-plugin-manifest",
  //   options: {
  //     name: "Mechanism Design Blog",
  //     short_name: "Mech Design",
  //     Start_url: "/",
  //     background_color: "#fff",
  //     theme_color: "#cceedd",
  //     display: "minimal-ui",
  //     icon: "",
  //   },
  // },
];
