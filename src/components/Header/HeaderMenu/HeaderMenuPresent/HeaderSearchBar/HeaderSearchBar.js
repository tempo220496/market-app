import React from "react";
import "./HeaderSearchbar.css"

const HeaderSearchBar = () => {
  return (
    <div className="header__search-bar">
      <select name="category" id="category" className="header__search-category">
        <option value="all_categories">All categories</option>
      </select>
      <input
        type="text"
        placeholder="Keyword here..."
        className="header__search-input"
      />
      <button className="header__search-button fa fa-search"></button>
    </div>
  );
};

export default HeaderSearchBar;