import React from "react";

interface BadgeProps {
  label: string | number;
}

function Badge({ label }: BadgeProps) {
  return <div className="badge">{label}</div>;
}

export default Badge;
