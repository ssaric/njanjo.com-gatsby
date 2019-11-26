import React from 'react';

import Profile from '../images/profile.jpg';


import './profile.scss';

const profile = () => (
    <div className="profile">
        <img alt="profile" src={Profile} className="profile-pic" />
        <div className="profile-details">
            <h3 className="profile-details__name">Sanjin Šarić</h3>
            <span className="body-2 profile-details__title">Software Engineer</span>
        </div>

    </div>
);

profile.propTypes = {};
profile.defaultProps = {};

export default profile;
