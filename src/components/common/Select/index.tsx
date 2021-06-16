import React, { ReactNode } from "react";
import "./Select.scss";

interface SelectProps {
  children?: ReactNode;
}

function Select({ children }: SelectProps) {
  return <select className="select">{children}</select>;
}

export default Select;
