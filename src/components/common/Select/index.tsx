import React, { ReactNode } from "react";

interface SelectProps {
  children?: ReactNode;
}

function Select({ children }: SelectProps) {
  return <select className="select">{children}</select>;
}

export default Select;
