import Badge from "@src/components/common/Badge";
import { Tag } from "@src/lib/types/blog";
import { mapToKebabCase } from "@src/lib/utils/stringUtils";
import { Link } from "gatsby";
import React from "react";
import placeholder from "@src/assets/images/placeholder.jpg";

interface TagCardProps {
  tag: Tag;
}

function TagCard({ tag }: TagCardProps) {
  return (
    <div className="tag-card">
      <Link to={`/tags/${mapToKebabCase(tag.name)}`}>
        <header className="tag-card__header">
          <img src={tag.src || placeholder} alt="Tag Thumbnail" />
        </header>
        <footer className="tag-card__footer">
          <h6 className="tag-card__name">#{tag.name}</h6>
          <Badge label={tag?.totalCount || 0} />
        </footer>
      </Link>
    </div>
  );
}

export default TagCard;
