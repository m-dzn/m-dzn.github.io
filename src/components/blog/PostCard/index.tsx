import { Link } from "gatsby";
import React from "react";
import "./PostCard.scss";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <Link to={post.fields.slug}>
        <article itemScope itemType="http://schema.org/Article">
          <div className="post-card__thumbnail" />
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
