import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderBackgroundCrimson from './HeaderBackgroundCrimson/HeaderBackgroundCrimson';

const Header = () => {
    return (
        <header className="header">
			<HeaderMenu />
			<HeaderBackgroundCrimson />
		</header>
    );
}

export default Header;
