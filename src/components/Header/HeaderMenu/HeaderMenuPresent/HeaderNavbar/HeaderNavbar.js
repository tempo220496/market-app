import React from "react";

const HeaderNavbar = () => {
  return (
    <nav className="header__navbar">
      <select className="header__nav-link gotham-medium-regular">
        <option value="home">HOME</option>
      </select>
      <select className="header__nav-link gotham-medium-regular">
        <option value="layouts">LAYOUTS</option>
      </select>
      <select className="header__nav-link gotham-medium-regular">
        <option value="feature">FEATURE</option>
      </select>
      <select className="header__nav-link gotham-medium-regular">
        <option value="shop">SHOP</option>
      </select>
      <select className="header__nav-link gotham-medium-regular">
        <option value="blog">BLOG</option>
      </select>
      <select className="header__nav-link gotham-medium-regular">
        <option value="pages">PAGES</option>
      </select>
    </nav>
  );
};

export default HeaderNavbar;
