import Navbar from "@src/components/ui/Navbar";
import React, { ReactNode } from "react";
// import "./Layout.scss";

interface Container {
  title: string;
  description?: string;
  children?: ReactNode;
}

function Container({ title, description = "", children, ...rest }: Container) {
  return (
    <div id="container" {...rest}>
      <div className="frame">
        <header className="site-header">
          <Navbar />
          <div className="site-header__title">
            <h1>{title}</h1>
          </div>
        </header>
        <main className="site-main">{children}</main>
      </div>
    </div>
  );
}

export default Container;
