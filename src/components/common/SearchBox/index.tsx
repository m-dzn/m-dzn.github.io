import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks";

interface SearchBoxProps {
  white?: boolean;
}

function SearchBox({ white }: SearchBoxProps) {
  return (
    <div className={`search-box ${white && "white"}`}>
      <input id="search" name="search" type="text" placeholder="Search" />
      <button className="search-btn">
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBox;
