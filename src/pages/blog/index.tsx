import { graphql } from "gatsby";
import * as React from "react";
import "@src/styles/main.scss";
import Container from "@src/components/Layout";
import PostListSection from "@src/components/Layout/PostListSection";
import PostCard from "@src/components/blog/PostCard";

// markup
const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Container title="Blog" description="">
      <PostListSection>
        {posts.map(post => (
          <PostCard key={post.fields.slug} post={post} />
        ))}
      </PostListSection>
    </Container>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
