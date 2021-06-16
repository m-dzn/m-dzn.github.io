import React from "react";
import "./SearchBox.scss";
import SearchIcon from "@material-ui/icons/Search";

interface SearchBoxProps {}

function SearchBox({}: SearchBoxProps) {
  return (
    <div className="search-box">
      <input id="search" name="search" type="text" placeholder="Search" />
      <button className="search-btn">
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBox;
