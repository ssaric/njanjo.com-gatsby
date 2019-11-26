import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkWrapper = ({
    href, icon, text, className,
}) => (
    <a href={href}>
        <button type="button" className={className}>
            <div className="btn__icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <span className="body-1 btn__text">{text}</span>
        </button>
    </a>
);

LinkWrapper.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
LinkWrapper.defaultProps = {
    className: undefined,
};

export default LinkWrapper;
