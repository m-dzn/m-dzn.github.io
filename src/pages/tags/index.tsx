import { graphql } from "gatsby";
import * as React from "react";
import "@src/styles/main.scss";
import Layout from "@src/components/Layout";
import CardView from "@src/components/Layout/CardView";
import TagCard from "@src/components/blog/TagCard/index";

const TagsPage = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;
  const tags = data.tags.group;
  console.log(tags);

  return (
    <Layout pageTitle="Tags" siteMetadata={siteMetadata}>
      <CardView>
        {tags && tags.map(tag => <TagCard key={tag.fieldValue} tag={tag} />)}
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
  }
`;
