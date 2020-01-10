import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = ({ icon, href, text }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn-primary social">
            <div className="btn__icon">
                <FontAwesomeIcon icon={['fab', icon]} />
            </div>
            <span className="btn__text">{text}</span>
        </button>
    </a>
);

Social.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

Social.defaultProps = {
};

export default Social;
