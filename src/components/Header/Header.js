import React from 'react';
import './Header.css'
import 'font-awesome/css/font-awesome.min.css';
import nike_logo from "../../assets/img/nike_logo.png";

const Header = () => {
    return (
        <header className="header">
			<section className="header__menu">
				<div className="container">
					<section className="header__menu-present flex-row flex-wrap">
						<div className="header__menu-logo">
							<img src={nike_logo} alt="" className="nike_logo" />
							<span className="nike_intro uppercase">air force</span>
						</div>
						<div className="header__search-bar">
							<select name="category" id="category" className="header__search-category">
								<option value="all_categories">All categories</option>
							</select>
							<input type="text" placeholder="Keyword here..." className="header__search-input" />
							<button className="header__search-button fa fa-search"></button>
						</div>
						<div className="header__shopping-report">
							<p className="shopping-card uppercase">shopping-cart</p>
							<p className="shopping-report">0 item(s)-$0.00</p>
						</div>
						<nav className="header__navbar">
							<select className="header__nav-link gotham-medium-regular">
								<option value="home">
									HOME
								</option>
							</select>
							<select className="header__nav-link gotham-medium-regular">
								<option value="layouts">
									LAYOUTS
								</option>
							</select>
							<select className="header__nav-link gotham-medium-regular">
								<option value="feature">
									FEATURE
								</option>
							</select>
							<select className="header__nav-link gotham-medium-regular">
								<option value="shop">
									SHOP
								</option>
							</select>
							<select className="header__nav-link gotham-medium-regular">
								<option value="blog">
									BLOG
								</option>
							</select>
							<select className="header__nav-link gotham-medium-regular">
								<option value="pages">
									PAGES
								</option>
							</select>
						</nav>
					</section>
				</div>
			</section>
			<div className="header__background_crimson">
				<section className="header__banner">
					<div className="container">
						<section className="header__section">
							<h1 className="header__title uppercase">nike</h1>
							<h2 className="header__intro uppercase">air force 1 ultra flykint</h2>
							<p className="header__text margin-zero gotham-book">
								Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the industry's
								standard dummy text ever since the 1500s, when an
								unknown printer took
							</p>
						</section>
					</div>
				</section>
			</div>
		</header>
    );
}

export default Header;
