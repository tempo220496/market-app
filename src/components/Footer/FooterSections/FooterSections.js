import React, { Fragment } from "react";
import "./FooterSections.css";
import FooterSection from "./FooterSection/FooterSection";
import FourthFooterSection from "./FourthFooterSection/FourthFooterSection";
import uniqid from "uniqid";

const FOOTERSECTIONS=[
  {
    footerTitle:"information",
    footerList:["delivery","about us","pages configuration","prices drop","contact us","sitemap","stores"]
  },
  {
    footerTitle:"your account",
    footerList:['personal info','orders','credit clips','addresses']
  },
  {
    footerTitle:"categories",
    footerList:['men','athletic','women','boys','girls','sale']
  }
];

const FooterSections = () => {
  return (
    <Fragment>
      {
        FOOTERSECTIONS.map(footer_section=><FooterSection
          key={uniqid()} 
          footerTitle={footer_section.footerTitle} 
          footerList={footer_section.footerList} />)
      }
      <FourthFooterSection />
    </Fragment>
  );
};

export default FooterSections;
