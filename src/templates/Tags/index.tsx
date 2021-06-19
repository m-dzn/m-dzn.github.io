import { graphql } from "gatsby";
import * as React from "react";
import Layout from "@src/components/Layout";
import Select from "@src/components/common/Select";
import CardView from "@src/components/Layout/CardView";
import PostCard from "@src/components/blog/PostCard";
import { Post } from "@src/lib/types/blog";

// markup
const Tags = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const siteMetadata = data.site.siteMetadata;
  const posts = data.allMdx.nodes;

  return (
    <Layout pageTitle={tag} siteMetadata={siteMetadata}>
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

export default Tags;

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMdx(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
