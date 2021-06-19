import { graphql } from "gatsby";
import * as React from "react";
import "@src/styles/main.scss";
import Layout from "@src/components/Layout";
import PostCard from "@src/components/blog/PostCard";
import Select from "@src/components/common/Select";
import CardView from "@src/components/Layout/CardView";
import { Post } from "@src/lib/types/blog";

// markup
const BlogPage = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;
  const posts = data.allMdx.nodes;

  return (
    <Layout pageTitle="Blog" siteMetadata={siteMetadata}>
      <Select>
        <option>Newest</option>
        <option>Most viewed</option>
        <option>Most Liked</option>
      </Select>
      <CardView>
        {posts.map((post: Post) => (
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
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
