import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <Fragment>
      <section className="footer__section">
        <h1 className="uppercase gotham-bold margin-zero footer__title_color">
          information
        </h1>
        <div className="footer__list">
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              delivery
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              about us
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              pages configuration
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              prices drop
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              contact us
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              sitemap
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              stores
            </Link>
          </li>
        </div>
      </section>
      <section className="footer__section">
        <h1 className="uppercase gotham-bold margin-zero footer__title_color">
          your account
        </h1>
        <div className="footer__list">
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              personal info
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              orders
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              credit clips
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              addresses
            </Link>
          </li>
        </div>
      </section>
      <section className="footer__section">
        <h1 className="uppercase gotham-bold margin-zero footer__title_color">
          categories
        </h1>
        <div className="footer__list">
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              men
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              athletic
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              women
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              boys
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              girls
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              sale
            </Link>
          </li>
        </div>
      </section>
      <section className="footer__section">
        <h1 className="uppercase gotham-bold margin-zero footer__title_color">
          store information
        </h1>
        <div className="footer__list">
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              <i className="fa fa-map-marker"></i>
              HAMINTEC4578 GLASGOW D04 UNITED STATES
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              <span className="fa fa-phone"></span> 9845321232
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className="footer__link color-white text-decoration-none"
            >
              <i className="fa fa-envelope"></i> info@himanshu.com
            </Link>
          </li>
          <li className="footer__item color-white uppercase roboto-regular">
            <Link
              href="#"
              className=" footer__logo_link footer__link color-white text-decoration-none"
            >
              <span className="fa fa-twitter"></span>
            </Link>
            <Link
              href="#"
              className=" footer__logo_link footer__link color-white text-decoration-none"
            >
              <span className="fa fa-facebook"></span>
            </Link>
            <Link
              href="#"
              className=" footer__logo_link footer__link color-white text-decoration-none"
            >
              <span className="fa fa-dribbble"></span>
            </Link>
            <Link
              href="#"
              className=" footer__logo_link footer__link color-white text-decoration-none"
            >
              <span className="fa fa-google-plus"></span>
            </Link>
          </li>
        </div>
      </section>
    </Fragment>
  );
};

export default FooterSection;
