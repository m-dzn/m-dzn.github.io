import React from "react";
import "./Navbar.scss";
import NavMenuItem from "./NavMenuItem";

function Navbar() {
  const menuItems = [
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Tags", to: "/tags" },
  ];
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        {menuItems.map(item => (
          <NavMenuItem key={item.to} to={item.to}>
            {item.label}
          </NavMenuItem>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
