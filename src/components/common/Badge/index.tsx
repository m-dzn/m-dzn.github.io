import React from "react";
import "./Badge.scss";

interface BadgeProps {
  label: string | number;
}

function Badge({ label }: BadgeProps) {
  return <div className="badge">{label}</div>;
}

export default Badge;
