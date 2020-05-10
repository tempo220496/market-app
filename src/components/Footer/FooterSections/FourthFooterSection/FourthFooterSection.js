import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from "uniqid";

const SPECIAL_LINKS={
  text_logos:[
    {logo:"fa fa-map-marker",text:"HAMINTEC4578 GLASGOW D04 UNITED STATES"},
    {logo:"fa fa-phone",text:"9845321232"},
    {logo:"fa fa-envelope",text:"info@ himanshu.com"}
  ],
  logos:["fa fa-twitter","fa fa-facebook","fa fa-dribbble","fa fa-google-plus"]
}

const FourthFooterSection = () => {
    return (
        <section className="footer__section">
        <h1 className="uppercase gotham-bold margin-zero footer__title_color">
          store information
        </h1>
        <ul className="footer__list">
          {SPECIAL_LINKS.text_logos.map(text_logo=>{
            return  <li key={uniqid()} className="footer__item color-white uppercase roboto-regular">
                      <Link
                        to="#"
                        className="footer__link color-white text-decoration-none"
                      >
                        <i className={text_logo.logo}></i>
                        {text_logo.text}
                      </Link>
                    </li>
            })
          }
          <li className="footer__item color-white uppercase roboto-regular">
            {
              SPECIAL_LINKS.logos.map(logo=>{
                return <Link
                        key={uniqid()}
                        to="#"
                        className=" footer__logo_link footer__link color-white text-decoration-none"
                      >
                        <span className={logo}></span>
                      </Link>
              })
            }
          </li>
        </ul>
      </section>
    );
}

export default FourthFooterSection;
