import React from "react";
import { Link } from "gatsby";
import { PostNavMetaData } from "@src/types/blog";

interface indexProps {
  prev: PostNavMetaData;
  next: PostNavMetaData;
}

function PostBottomNav({ prev, next }: indexProps) {
  return (
    <nav className="blog-post-nav">
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {prev && (
            <Link to={prev.fields.slug} rel="prev">
              ← {prev.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default PostBottomNav;
