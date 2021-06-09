import { Link } from "gatsby";
import React from "react";
import "./PostCard.scss";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <Link to={post.fields.slug}>
        <article itemScope itemType="http://schema.org/Article">
          <header>
            <div className="post-card__thumbnail" />
            <small className="post-card__date caption">
              {post.frontmatter.date}
            </small>
            <h4 className="post-card__title">{post.frontmatter.title}</h4>
          </header>
          <section className="post-card__content">
            <p>{post.frontmatter.description || post.excerpt}</p>
          </section>
        </article>
      </Link>
    </div>
  );
}

export default PostCard;
