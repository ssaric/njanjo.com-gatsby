import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';
import SEO from './seo';

import './head';

import './root-container.scss';
import Profile from '../images/profile.jpg';

const Layout = props => (
    <div className="root-container">
        <SEO banner={Profile} />
        <Navbar />
        {props.children}
    </div>
);

Layout.propTypes = {
    children: PropTypes.any.isRequired,
};
Layout.defaultProps = {
};

export default Layout;
