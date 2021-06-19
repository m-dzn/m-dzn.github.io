import { graphql } from "gatsby";
import * as React from "react";
import "@src/styles/main.scss";
import Layout from "@src/components/Layout";
import Select from "@src/components/common/Select";
import CardView from "@src/components/Layout/CardView";

// markup
const TagPosts = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;
  const posts = data.allMdx.nodes;

  return (
    <Layout pageTitle="Blog" siteMetadata={siteMetadata}>
      <Select>
        <option>Newest</option>
        <option>Most viewed</option>
        <option>Most Liked</option>
      </Select>
      <CardView></CardView>
    </Layout>
  );
};

export default TagPosts;

export const pageQuery = graphql`
  query PostsByCategory {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`;
