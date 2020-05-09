import React from 'react';
import "./Footer.css"
import FooterSections from './FooterSections/FooterSections';
import FooterNikeBlock from './FooterNikeBlock/FooterNikeBlock';
import FooterBottom from './FooterBottom/FooterBottom';

const Footer = () => {
    return (
        <footer className="footer">
			<div className="container flex-row space-around align-items-start flex-wrap">
				<FooterSections />
			</div>
			<FooterNikeBlock />
			<FooterBottom />
		</footer>
    );
}

export default Footer;
