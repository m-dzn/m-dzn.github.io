import React from "react";

export type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  tag: HeadingTypes;
}

function Heading({
  tag: Tag,
  children,
  ...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) {
  // const id = mapHeadingTitleToId(getStringFromChildren(children));

  return <Tag {...props}>{children}</Tag>;
}

export default Heading;
