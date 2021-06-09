import React from "react";
import Avatar from "@src/components/ui/Avatar";
import "./Sidebar.scss";
import { config } from "@root/config";

interface SidebarProps {}

function Sidebar() {
  return (
    <aside className="sidebar">
      <Avatar src={config.avatar} />
    </aside>
  );
}

export default Sidebar;
