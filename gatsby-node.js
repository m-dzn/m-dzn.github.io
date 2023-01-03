const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { config } = require("./config");

// Post 빌드가 성공적으로 끝나면 성공 메시지를 로그로 내보냅니다.
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

const resolveUrl = (...paths) =>
  paths.reduce((resolvedUrl, path) => {
    const urlPath = path.toString().trim();
    if (urlPath) {
      resolvedUrl += `/${urlPath.replace(/^\/|\/$/g, "")}`;
    }
    return resolvedUrl[0] === "/" ? resolvedUrl : `/${resolvedUrl}`;
  }, "");

// Blog의 Post Page들을 동적으로 생성합니다.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPostTemplate = path.resolve(`./src/templates/BlogPost/index.tsx`);

  // MarkDown으로 쓴 모든 Post를 시간 순으로 정렬해 불러옵니다.
  // (YAML Front-matter 기준)
  const result = await graphql(
    `
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
              }
              fileAbsolutePath
            }
            previous {
              id
            }
            next {
              id
            }
          }
        }
      }
    `
  );

  // Post Page 빌드에 실패하면 에러 메시지를 로그로 내보냅니다.
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  // Template 컴포넌트를 이용해 MarkDown 노드들을 Post Page로 변환합니다.
  const posts = result.data.allMdx.edges;

  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: blogPostTemplate,
        context: {
          id: edge.node.id,
          previousPostId: edge.previous?.id,
          nextPostId: edge.next?.id,
        },
      });
    });
  }

  /**
   * Tag Pages
   */
  const allTags = [];
  const defaultPosts = posts.filter(({ node: { fileAbsolutePath } }) =>
    fileAbsolutePath.match(/index\.mdx?$/)
  );
  defaultPosts.forEach(({ node }) => {
    node.frontmatter.tags?.forEach(tag => {
      if (allTags.indexOf(tag) === -1) allTags.push(tag);
    });
  });

  allTags.forEach(tag => {
    createPage({
      path: resolveUrl(config.pages.tag, tag),
      component: path.resolve("src/templates/Tags/index.tsx"),
      context: {
        tag,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};

// 절대 경로로 Module import
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "./src"),
        "@root": path.resolve(__dirname, "./"),
      },
      modules: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "./"),
      ],
    },
  });
};
