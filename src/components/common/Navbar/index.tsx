import React from "react";
import SearchBox from "@src/components/common/SearchBox";
import { Link } from "gatsby";

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <nav className="site-nav">
      <div className="site-nav__logo">
        <Link to="/">Mechanism Design</Link>
      </div>
      <SearchBox />
    </nav>
  );
}

export default Navbar;
