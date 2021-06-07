import { graphql } from "gatsby";
import * as React from "react";
import Container from "../../components/Layout/Container";

// markup
const AboutPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return <Container title="About" description=""></Container>;
};

export default AboutPage;

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
