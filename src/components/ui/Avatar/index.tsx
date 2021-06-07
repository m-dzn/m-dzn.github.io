import React from "react";
import "./Avatar.scss";

interface AvatarProps {
  src: string;
}

function Avatar({ src }: AvatarProps) {
  return (
    <div>
      <img className="avatar" src={src} alt="Author Avatar" />
    </div>
  );
}

export default Avatar;
