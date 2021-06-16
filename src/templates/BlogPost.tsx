import * as React from "react";
import { graphql } from "gatsby";
import PostBottomNav from "@src/components/blog/PostBottomNav";
import Layout from "@src/components/Layout";
import PostDetail from "@src/components/blog/PostDetail";

interface BlogPostTemplateProps {
  data: any;
  location: any;
}

function BlogPostTemplate({ data, location }: BlogPostTemplateProps) {
  const siteMetadata = data.site.siteMetadata;
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout
    // title={post.frontmatter.title}
    // description={post.frontmatter.description || post.excerpt}
    >
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
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
