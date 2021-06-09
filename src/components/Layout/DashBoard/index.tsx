import React from "react";
import Sidebar from "@src/components/ui/Sidebar";
import PageTemplate from "@src/components/Layout/PageTemplate";
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
