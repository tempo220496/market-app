import React from "react";
import nike_logo from "../../../../../assets/img/nike_logo.png";

const HeaderMenuLogo = () => {
  return (
    <div className="header__menu-logo">
      <img src={nike_logo} alt="" className="nike_logo" />
      <span className="nike_intro uppercase">air force</span>
    </div>
  );
};

export default HeaderMenuLogo;
