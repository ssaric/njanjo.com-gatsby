import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Experience from '../experience-list';

import './description.scss';
import ExperienceListItem from './experience-list-item';

const currentDate = moment();
const dateOfBirth = moment('1991-10-03');
const startWorkingDate = moment('2015-04-01');

const age = currentDate.diff(dateOfBirth, 'years');
const exp = currentDate.diff(startWorkingDate, 'years');


const description = () => (
    <div className="description">
        <h4 className="description__title">ABOUT ME</h4>
        <span className="description__simple-info body-1">{`${age} years old | ${exp} years experience | Sarajevo, Bosnia and Herzegovina`}</span>
        <span className="description__description body-1">Full stack developer with accent on frontend, specialied in React + Redux and vanilla JavaScript.</span>
        <span className="description__content body-1">
With higher education in telecommunications, transitioned into web development. Started as a backend developer,  but soon into the career got familiar with frontend as well. Worked with various technologies and languages some of them being: JS ecosystem, WebGL, Ruby on Rails and .NET. Focused on implementing robust, UX friendly features with minimum cognitive friction. When not coding, I am Researching UX topics, some of which are: psychology in web design, UI, HCI, and design thinking. Always up for a new challange and known for taking initiative
        </span>
        <span className="caption description__quote">
            “Jack of all trades, master of none, but better than master of one”
        </span>
        <div className="description-subtitle">
            <div className="description-subtitle__icon">
                <FontAwesomeIcon icon="briefcase" />
            </div>
            <h6 className="description-subtitle__text">EXPERIENCE</h6>
        </div>
        <ul className="description-timeline">
            {Experience.map(e => <ExperienceListItem key={e.title} {...e} />)}
        </ul>
        <div className="description-subtitle">
            <div className="description-subtitle__icon">
                <FontAwesomeIcon icon="graduation-cap" />
            </div>
            <h6 className="description-subtitle__text">EDUCATION</h6>
        </div>
        <ul className="description-timeline">
            <li className="description-timeline__item" data-date-end="2015" data-date-start="2013">
                <h6 className="description-timeline__item-title">Masters, Telecommunications</h6>
                <div className="description-timeline__roles">
                    <span className="body-2 description-timeline__role-item">NFC Attendance system  (Android)</span>
                </div>
            </li>
            <li className="description-timeline__item" data-date-end="2013" data-date-start="2010">
                <h6 className="description-timeline__item-title">Bachelors, Telecommunications</h6>
                <div className="description-timeline__roles">
                    <span className="body-2 description-timeline__role-item">Reconfigurable active RC filter</span>
                </div>
            </li>
        </ul>
    </div>
);

description.propTypes = {};
description.defaultProps = {};

export default description;
