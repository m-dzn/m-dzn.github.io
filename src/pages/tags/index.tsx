import * as React from "react";
import "@src/styles/main.scss";
import Container from "@src/components/Layout";
import PostListSection from "@src/components/Layout/PostListSection";

// markup
const TagsPage = () => {
  return (
    <Container title="Tags" description="">
      <PostListSection></PostListSection>
    </Container>
  );
};

export default TagsPage;
