import React, { useState } from 'react';
import classNames from 'classnames';

import Link from './link';

import './navbar.scss';

import Logo from '../images/logo.svg';

function Navbar() {
    const [expanded, setExpanded] = useState(false);
    return (
        <nav className={classNames('navbar', { 'navbar--expanded': expanded })}>
            <div
                onClick={() => {
                    if (window.matchMedia('all and (max-width: 1264px)').matches) return;
                    setExpanded(prevExpanded => !prevExpanded);
                }}
                className="navbar-button"
            >
                <Logo />
            </div>
            <div className="navbar__links-wrapper">
                <Link className="navbar__link" href="/about" icon="user-circle" text="About" />
                <Link className="navbar__link" href="/projects" icon="code" text="Projects" />
            </div>
        </nav>
    );
}

Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;
