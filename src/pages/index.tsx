import { graphql } from "gatsby";
import * as React from "react";
import "@src/styles/main.scss";
import Layout from "@src/components/Layout";
import PostCard from "@src/components/blog/PostCard";
import CardView from "./../components/Layout/CardView/index";
import Select from "@src/components/common/Select";

// markup
const BlogPage = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Select>
        <option>Newest</option>
        <option>Most viewed</option>
        <option>Most Liked</option>
      </Select>
      <CardView>
        {posts.map(post => (
          <PostCard key={post.fields.slug} post={post} />
        ))}
      </CardView>
    </Layout>
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
