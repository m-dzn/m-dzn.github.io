import React from "react";
import Avatar from "../Avatar";
import "./Sidebar.scss";
import Config from "../../../../config";

interface SidebarProps {}

function Sidebar() {
  return (
    <aside className="sidebar">
      <Avatar src={Config.avatar} />
    </aside>
  );
}

export default Sidebar;
