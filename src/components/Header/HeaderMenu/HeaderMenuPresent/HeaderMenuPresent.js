import React from "react";
import HeaderMenuLogo from "./HeaderMenuLogo/HeaderMenuLogo";
import HeaderSearchBar from "./HeaderSearchBar/HeaderSearchBar";
import HeaderShoppingReport from "./HeaderShoppingReport/HeaderShoppingReport";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import "./HeaderMenuPresent.css";

const HeaderMenuPresent = () => {
  return (
    <section className="header__menu-present flex-row flex-wrap">
      <HeaderMenuLogo />
      <HeaderSearchBar />
      <HeaderShoppingReport />
      <HeaderNavbar />
    </section>
  );
};

export default HeaderMenuPresent;