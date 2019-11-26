import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';
import SEO from './seo';

import './head';

import './root-container.scss';

const Layout = props => (
    <div className="root-container">
        <SEO />
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
