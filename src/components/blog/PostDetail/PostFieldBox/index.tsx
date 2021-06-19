import React from "react";

interface PostFieldBoxProps {
  label: string;
  data: string;
}

function PostFieldBox({ label, data }: PostFieldBoxProps) {
  return (
    <div className="post-field-box">
      <strong className="post-field-box__label">{label}</strong>
      <span className="post-field-box__data">{data}</span>
    </div>
  );
}

export default PostFieldBox;
