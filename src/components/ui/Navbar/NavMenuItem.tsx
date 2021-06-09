import { Link } from "gatsby";
import React, { ReactNode } from "react";

interface NavMenuItemProps {
  to: string;
  children: ReactNode;
}

function NavMenuItem({ to, children }: NavMenuItemProps) {
  return (
    <li className="nav-menu__item">
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default NavMenuItem;
