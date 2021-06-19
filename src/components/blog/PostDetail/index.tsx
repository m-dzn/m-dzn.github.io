import React from "react";
import { Author } from "@src/lib/types/site";
import { Post, PostNavMetaData } from "@src/lib/types/blog";
import PostBottomNav from "@src/components/blog/PostBottomNav";
import PostFieldBox from "./PostFieldBox";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Heading from "@src/components/common/Heading";

interface PostDetailProps {
  post: Post;
  author: Author;
  prev: PostNavMetaData;
  next: PostNavMetaData;
}

const customMDComponents = {
  h1: props => <Heading tag="h2" {...props} />,
  h2: props => <Heading tag="h3" {...props} />,
  h3: props => <Heading tag="h4" {...props} />,
  h4: props => <Heading tag="h5" {...props} />,
  h5: props => <Heading tag="h6" {...props} />,
  h6: props => <Heading tag="h6" {...props} />,
};

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
      <section className="post__md">
        <MDXProvider components={customMDComponents}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </section>

      <footer className="post__footer">
        <hr />
        <PostBottomNav prev={prev} next={next} />
      </footer>
    </article>
  );
}

export default PostDetail;
