import React from 'react';
import PropTypes from 'prop-types';

import './project.scss';

const Project = ({
    picture, title, link, description,
}) => (
    <a className="project" href={link} target="_blank" rel="noopener noreferrer">
        <div className="project__image-wrapper">
            <img className="project__image" alt="project" src={picture} />
        </div>
        <h6 title={title} className="project__title">{title}</h6>
        <div className="project__description">{description}</div>
    </a>
);

Project.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};
Project.defaultProps = {};

export default Project;
