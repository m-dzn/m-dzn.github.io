import React, { ReactNode } from "react";
import "./Layout.scss";
import Sidebar from "../common/Sidebar";
import Navbar from "@src/components/common/Navbar";

interface indexProps {
  children: ReactNode;
}

function Layout({ children }: indexProps) {
  return (
    <div id="frame">
      <Sidebar />
      <div className="dashboard">
        <header className="site-header">
          <Navbar />
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          Copyright &copy; 2021 Apple isle All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Layout;
