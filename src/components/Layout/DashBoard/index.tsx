import React from "react";
import Sidebar from "../../ui/Sidebar";
import PageTemplate from "../PageTemplate";
import "./DashBoard.scss";

function DashBoard({ title, description, children }) {
  return (
    <div className="dash-board">
      <Sidebar />
      <PageTemplate title={title} description={description}>
        {children}
      </PageTemplate>
    </div>
  );
}

export default DashBoard;
