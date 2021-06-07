import { Link } from "gatsby";
import React from "react";
import Config from "../../../../gatsby-config";
import "./BlogLayout.scss";
import DashBoard from "../../Layout/DashBoard";

function BlogLayout({ location, title, children }) {
  const rootPath = `${Config.pathPrefix}/`;
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
    <DashBoard>
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
