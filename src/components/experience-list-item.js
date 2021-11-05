import React from 'react';
import PropTypes from 'prop-types';

const ExperienceListItem = ({
    endDate,
    startDate,
    logo,
    title,
    role,
    responsibilities,
}) => (
    <li className="description-timeline__item" data-date-end={endDate} data-date-start={startDate}>
        <div className="company">
            <img alt={`${title}-pic`.toLocaleLowerCase()} className="company__logo" src={logo} />
            <div className="company__name">
                <h5 className="company__title">{title}</h5>
                <h6 className="company__role">{role}</h6>
            </div>
        </div>
        <div className="description-timeline__roles">
            {responsibilities.map(r => <span key={r} className="body-2 description-timeline__role-item">{r}</span>)}
        </div>
    </li>
);

ExperienceListItem.propTypes = {
    endDate: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    responsibilities: PropTypes.array.isRequired,
};
ExperienceListItem.defaultProps = {
};

export default ExperienceListItem;
