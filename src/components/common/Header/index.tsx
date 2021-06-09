import React from "react";
import "./Header.scss";

function Header({ title }) {
  return (
    <header className="page-header">
      <h1 className="page-header__title h3">{title}</h1>
    </header>
  );
}

export default Header;
