import React from "react";
import SearchBox from "@src/components/common/SearchBox";
import { Link } from "gatsby";
import MenuIcon from "@material-ui/icons/Menu";

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  const onClickHamburger = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (typeof document !== "undefined") {
      document.getElementById("sidebar").classList.toggle("open");
    }
  };
  return (
    <nav className="site-nav">
      <div className="site-nav__logo">
        <Link to="/">Mechanism Design</Link>
      </div>
      <div className="site-nav__search">
        <SearchBox />
      </div>
      <div className="hamburger" onClick={onClickHamburger}>
        <MenuIcon />
      </div>
    </nav>
  );
}

export default Navbar;
