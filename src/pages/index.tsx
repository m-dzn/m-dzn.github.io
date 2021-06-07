import { graphql } from "gatsby";
import * as React from "react";
import "../styles/main.scss";
import Container from "../components/Layout/Container";
import PostCard from "../components/blog/PostCard";
import PostListSection from "../components/Layout/PostListSection";

// markup
const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Container title="Main" description="">
      <PostListSection>
        {posts.map((post) => (
          <PostCard key={post.fields.slug} post={post} />
        ))}
      </PostListSection>
    </Container>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
        fields {
          slug
        }
        excerpt(pruneLength: 100)
      }
    }
  }
`;
