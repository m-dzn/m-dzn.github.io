import { Link } from "gatsby";
import React from "react";
import { config } from "@root/config";
import "./BlogLayout.scss";
import DashBoard from "@src/components/Layout/DashBoard";

function BlogLayout({ location, title, children }) {
  const rootPath = `${config.pathPrefix}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <DashBoard title={title} description="">
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </DashBoard>
  );
}

export default BlogLayout;
