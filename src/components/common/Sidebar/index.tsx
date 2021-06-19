import React from "react";
import logo from "@src/assets/icons/logo.png";
import { Link } from "gatsby";
import sidebarRoutes from "@src/routes/sidebarRoutes";
import SearchBox from "@src/components/common/SearchBox";
import CloseIcon from "@material-ui/icons/Close";
import { MouseEvent } from "react";
import { useState } from "react";

interface indexProps {}

function Sidebar({}: indexProps) {
  const onClickClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof document !== "undefined") {
      document.getElementById("sidebar").classList.remove("open");
    }
  };

  return (
    <aside id="sidebar">
      <ul className="sidebar__menu">
        <li className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </li>

        <li className="sidebar__search">
          <SearchBox white />
        </li>

        {sidebarRoutes.map(item => (
          <li key={item.to}>
            <Link to={item.to}>
              <item.icon />
              <span className="sidebar__menu-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <button className="sidebar__close" onClick={onClickClose}>
        <CloseIcon />
      </button>
    </aside>
  );
}

export default Sidebar;
