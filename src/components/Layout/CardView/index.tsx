import React, { ReactNode } from "react";
import "./CardView.scss";

interface indexProps {
  children?: ReactNode;
}

function CardView({ children }: indexProps) {
  return <div className="card-view">{children}</div>;
}

export default CardView;
