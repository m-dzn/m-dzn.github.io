import { graphql } from "gatsby";
import * as React from "react";
import Layout from "@src/components/Layout";
import CardView from "@src/components/Layout/CardView";
import TagCard from "@src/components/blog/TagCard";

const TagsPage = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;
  const thumbnails = data.allFile.nodes;

  const tags = data.tags.group.map(tag => {
    const src = thumbnails.find(thumbnail => thumbnail.name === tag.fieldValue);
    return {
      name: tag.fieldValue,
      totalCount: tag.totalCount,
      src: src ? src.childImageSharp.fluid.src : "",
    };
  });

  return (
    <Layout pageTitle="Tags" siteMetadata={siteMetadata}>
      <CardView>
        {tags && tags.map(tag => <TagCard key={tag.name} tag={tag} />)}
      </CardView>
    </Layout>
  );
};

export default TagsPage;

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
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    allFile(filter: { relativeDirectory: { eq: "tags" } }) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;
