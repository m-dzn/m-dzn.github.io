import React from "react";
import { Link } from "gatsby";
import { PostNavMetaData } from "@src/lib/types/blog";

interface indexProps {
  prev: PostNavMetaData;
  next: PostNavMetaData;
}

function PostBottomNav({ prev, next }: indexProps) {
  return (
    <nav className="post-nav">
      <ul className="post-nav-menu">
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
