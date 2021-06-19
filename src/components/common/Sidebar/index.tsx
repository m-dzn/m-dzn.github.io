import React from "react";
import logo from "@src/assets/icons/logo.png";
import { Link } from "gatsby";
import sidebarRoutes from "@src/routes/sidebarRoutes";

interface indexProps {}

function Sidebar({}: indexProps) {
  return (
    <aside className="sidebar">
      <ul className="sidebar__menu">
        <li className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </li>

        {sidebarRoutes.map(item => (
          <li key={item.to}>
            <Link to={item.to}>
              <item.icon />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
