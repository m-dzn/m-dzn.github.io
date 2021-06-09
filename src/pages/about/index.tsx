import { graphql } from "gatsby";
import * as React from "react";
import "@src/styles/main.scss";
import Container from "@src/components/Layout";
import PostListSection from "@src/components/Layout/PostListSection";
// markup
const AboutPage = () => {
  return (
    <Container title="About" description="">
      <PostListSection></PostListSection>
    </Container>
  );
};

export default AboutPage;
