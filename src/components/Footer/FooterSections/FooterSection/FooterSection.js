import React from 'react';
import FooterList from './FooterList/FooterList';

const FooterSection = ({footerTitle,footerList}) => {
    return (
        <section className="footer__section">
            <h1 className="uppercase gotham-bold margin-zero footer__title_color">
              {footerTitle}
            </h1>
            <FooterList footerList={footerList} />
        </section>
    );
}

export default FooterSection;
