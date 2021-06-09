import React, { ReactNode } from "react";
import "./PostListSection.scss";

interface PostListSectionProps {
  children?: ReactNode;
}

function PostListSection({ children }: PostListSectionProps) {
  return <section className="contents-section">{children}</section>;
}

export default PostListSection;
