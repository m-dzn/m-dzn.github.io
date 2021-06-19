import * as React from "react";
import { graphql } from "gatsby";
import Layout from "@src/components/Layout";
import PostDetail from "@src/components/blog/PostDetail";
import ToC from "@src/components/blog/ToC";

interface BlogPostTemplateProps {
  data: any;
  location: any;
}

function BlogPostTemplate({ data, location }: BlogPostTemplateProps) {
  const siteMetadata = data.site.siteMetadata;
  const post = data.mdx;
  const { previous, next } = data;

  return (
    <Layout siteMetadata={siteMetadata}>
      <ToC tableOfContents={post.tableOfContents.items} />
      <PostDetail
        post={post}
        author={siteMetadata.author}
        prev={previous}
        next={next}
      />
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      tableOfContents(maxDepth: 3)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
