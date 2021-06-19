import Badge from "@src/components/common/Badge";
import { Tag } from "@src/lib/types/blog";
import { mapToKebabCase } from "@src/lib/utils/stringUtils";
import { Link } from "gatsby";
import React from "react";
import "./TagCard.scss";

interface TagCardProps {
  tag: Tag;
}

function TagCard({ tag }: TagCardProps) {
  return (
    <div className="tag-card">
      <Link to={`/tags/${mapToKebabCase(tag.fieldValue)}`}>
        <header className="tag-card__header">
          <img
            src="https://images.unsplash.com/photo-1558655146-605d86ed31b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Tag Thumbnail"
          />
        </header>
        <footer className="tag-card__footer">
          <h6 className="tag-card__name">{tag.fieldValue}</h6>
          <Badge label={tag?.totalCount || 0} />
        </footer>
      </Link>
    </div>
  );
}

export default TagCard;
