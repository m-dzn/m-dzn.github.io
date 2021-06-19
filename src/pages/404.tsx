import * as React from "react";
import { graphql } from "gatsby";
import Seo from "@src/components/common/Seo";
import Layout from "@src/components/Layout";

const NotFoundPage = ({ data }) => {
  const siteMetadata = data.site.siteMetadata;

  return (
    <Layout siteMetadata={siteMetadata}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

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
  }
`;
