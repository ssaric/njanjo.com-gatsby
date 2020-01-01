import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comtrade from '../images/ct_logo.png';
import Evomecs from '../images/evomecs_logo.png';
import Socex from '../images/socialexplorer_logo.png';
import GlobalGPS from '../images/globalgps_logo.png';

import './description.scss';

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
            <li className="description-timeline__item" data-date-end="Present" data-date-start="January 2019">
                <div className="company">
                    <img alt="comtrade-pic" className="company__logo" src={Comtrade} />
                    <h6 className="company__title">Comtrade</h6>
                </div>
                <div className="description-timeline__roles">
                    <span className="body-2 description-timeline__role-item">introduce a build environment</span>
                    <span className="body-2 description-timeline__role-item">refactoring eslint and typescript usage</span>
                    <span className="body-2 description-timeline__role-item">workshop host for React best practices</span>
                </div>
            </li>
            <li className="description-timeline__item" data-date-end="October 2019" data-date-start="January 2019">
                <div className="company">
                    <img alt="comtrade-pic" className="company__logo" src={Evomecs} />
                    <h6 className="company__title">Evomecs GmbH</h6>
                </div>
                <div className="description-timeline__roles">
                    <span className="body-2 description-timeline__role-item">clean up and consolidate build systems for development and production (webpack and rollup)</span>
                    <span className="body-2 description-timeline__role-item">introduce code proofing tools and heavily refactor existing projects</span>
                    <span className="body-2 description-timeline__role-item">introduce code style guide and CSS style guide. Start drafting the company design guidelines</span>
                    <span className="body-2 description-timeline__role-item">develop React components in Relay.js</span>
                    <span className="body-2 description-timeline__role-item">develop backend GraphQL endpoints in .NET</span>
                </div>
            </li>
            <li className="description-timeline__item" data-date-end="January 2019" data-date-start="March 2016">
                <div className="company">
                    <img alt="comtrade-pic" className="company__logo" src={Socex} />
                    <h6 className="company__title">Social Explorer Inc.</h6>
                </div>
                <div className="description-timeline__roles">
                    <span className="body-2 description-timeline__role-item">created myriad of React components in propriertary framework</span>
                    <span className="body-2 description-timeline__role-item">piloted the creation and development of bash script for faster bootstraping process</span>
                    <span className="body-2 description-timeline__role-item">refactored Ruby on Rails Project and implemented new website design</span>
                    <span className="body-2 description-timeline__role-item">maintained company fork of mapbox-gl-js and added new features to the renderer</span>
                    <span className="body-2 description-timeline__role-item">utilized own initiative in solely developing an idea floating around the office</span>
                </div>
            </li>
            <li className="description-timeline__item" data-date-end="March 2016" data-date-start="April 2015">
                <div className="company">
                    <img alt="comtrade-pic" className="company__logo" src={GlobalGPS} />
                    <h6 className="company__title">GlobalGPS BH</h6>
                </div>
                <div className="description-timeline__roles">
                    <span className="body-2 description-timeline__role-item">developed API endpoints in OSGi Java framework</span>
                    <span className="body-2 description-timeline__role-item">boostraped and developed featuers for company Android application</span>
                    <span className="body-2 description-timeline__role-item">maintained company network</span>
                </div>
            </li>
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
