import React from "react";
import "./PostDetail.scss";
import { Author, Post, PostNavMetaData } from "@src/types/blog";
import PostBottomNav from "@src/components/blog/PostBottomNav";
import PostFieldBox from "./PostFieldBox";

interface PostDetailProps {
  post: Post;
  author: Author;
  prev: PostNavMetaData;
  next: PostNavMetaData;
}

function PostDetail({ post, author, prev, next }: PostDetailProps) {
  return (
    <article className="post">
      <header className="post__header">
        <h1 className="post__title">{post.frontmatter.title}</h1>
        <div className="post__meta-info-box">
          <PostFieldBox label="Author" data={author.name} />
          <PostFieldBox label="Date" data={post.frontmatter.date} />
        </div>
      </header>
      <section
        className="post__md"
        dangerouslySetInnerHTML={{ __html: post.html }}
        // itemProp="articleBody"
      />

      <footer className="post__footer">
        <hr />
        <PostBottomNav prev={prev} next={next} />
      </footer>
    </article>
  );
}

export default PostDetail;
