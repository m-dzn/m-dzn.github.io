import React, { ReactNode } from "react";

interface indexProps {
  children?: ReactNode;
}

function CardView({ children }: indexProps) {
  return <div className="card-view">{children}</div>;
}

export default CardView;
