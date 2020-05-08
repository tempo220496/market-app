import React from 'react';
import "./TopLine.css"

const TopLine = () => {
    return (
        <div className="top__line">
			<div className="container">
				<section className="top__selects">
					<select name="currency" id="currency" className="top__currency">
						<option value="us_dollar">$ US Dollar</option>
						<option value="ru_rubble">RU Rubble</option>
						<option value="kg_som">KG Som</option>
					</select>
					<select name="language" id="language">
						<option value="language">Language</option>
						<option value="english">English</option>
						<option value="russian">Russian</option>
						<option value="kyrgyz">Kyrgyz</option>
					</select>
				</section>
				<nav className="top__navbar">
					<select name="authorization" id="top__auth" className="top__link">
						<option value="my_account">My Account</option>
					</select>
					<a href="#" className="top__link"><span className="fa fa-heart"></span> Wish list (0)</a>
					<a href="#" className="top__link top__link_checkout"><span className="fa fa-check"></span> Checkout</a>
					<a href="#" className="top__link"><span className="fa fa-shopping-bag"></span> Login</a>
				</nav>
			</div>
		</div>
    );
}

export default TopLine;
