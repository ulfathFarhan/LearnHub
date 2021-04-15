import React from "react";

const SearchBar = (props) => (
  <input
    id="search"
    type="type"
    placeholder="Search..."
    onChange={(event) => {
      props.search(event.target.value);
    }}
  />
);

export default SearchBar;
