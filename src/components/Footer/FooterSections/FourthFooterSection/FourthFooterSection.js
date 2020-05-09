import React from 'react';
import { Link } from 'react-router-dom';

const FourthFooterSection = () => {
    return (
        <section className="footer__section">
        <h1 className="uppercase gotham-bold margin-zero footer__title_color">
          store information
        </h1>
        <ul className="footer__list">
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              to="#"
              className="footer__link color-white text-decoration-none"
            >
              <i className="fa fa-map-marker"></i>
              HAMINTEC4578 GLASGOW D04 UNITED STATES
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              to="#"
              className="footer__link color-white text-decoration-none"
            >
              <span className="fa fa-phone"></span> 9845321232
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              to="#"
              className="footer__link color-white text-decoration-none"
            >
              <i className="fa fa-envelope"></i> info@ himanshu.com
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              to="#"
              className=" footer__logo_link footer__link color-white text-decoration-none"
            >
              <span className="fa fa-twitter"></span>
            </Link>
            <Link
              to="#"
              className=" footer__logo_link footer__link color-white text-decoration-none"
            >
              <span className="fa fa-facebook"></span>
            </Link>
            <Link
              to="#"
              className=" footer__logo_link footer__link color-white text-decoration-none"
            >
              <span className="fa fa-dribbble"></span>
            </Link>
            <Link
              to="#"
              className=" footer__logo_link footer__link color-white text-decoration-none"
            >
              <span className="fa fa-google-plus"></span>
            </Link>
          </li>
        </ul>
      </section>
    );
}

export default FourthFooterSection;
