import { Post } from "@src/lib/types/blog";
import { Link } from "gatsby";
import React from "react";
import placeholder from "@src/assets/images/placeholder.jpg";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <div className="post-card">
      <Link to={post.fields.slug}>
        <article itemScope itemType="http://schema.org/Article">
          <div className="post-card__thumbnail">
            <img
              src={
                post.frontmatter.thumbnail?.childImageSharp.fluid.src ||
                placeholder
              }
              alt={`${post.frontmatter.title} thumbnail`}
            />
          </div>
          <section className="post-card__content">
            <div className="post-card__tags">
              <small>
                {(post.frontmatter && `#${post.frontmatter.tags}`) || ""}
              </small>
            </div>
            <h5 className="post-card__title">{post.frontmatter.title}</h5>
            <small className="post-card__date">Mar 17, 2021</small>
          </section>
        </article>
      </Link>
    </div>
  );
}

export default PostCard;
