import React from 'react';
import nike from'../../../assets/img/nike.png';
import "./FooterNikeBlock.css";

const FooterNikeBlock = () => {
    return (
        <section className="footer__nike-block flex-center">
				<img src={nike} alt="footer-nike-logo" className="footer__nike" />
				<span className="footer__nike-name color-white uppercase gotham-bold">nike</span>
		</section>
    );
}

export default FooterNikeBlock;
