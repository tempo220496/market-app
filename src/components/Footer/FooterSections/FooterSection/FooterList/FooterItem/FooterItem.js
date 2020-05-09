import React from 'react';
import { Link } from 'react-router-dom';

const FooterItem = ({footerItemLink}) => {
    return (
        <li className="footer__item color-white uppercase roboto-regular">
            <Link
              to="#"
              className="footer__link color-white text-decoration-none"
            >
              {footerItemLink}
            </Link>
        </li>
    );
}

export default FooterItem;
