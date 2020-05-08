import React from 'react';
import "./Footer.css"
import FooterSection from './FooterSection/FooterSection';
import FooterNikeBlock from './FooterNikeBlock/FooterNikeBlock';
import FooterBottom from './FooterBottom/FooterBottom';

const Footer = () => {
    return (
        <footer className="footer">
			<div className="container flex-row space-around align-items-start flex-wrap">
				<FooterSection />
			</div>
			<FooterNikeBlock />
			<FooterBottom />
		</footer>
    );
}

export default Footer;
