// components/Description.tsx
import React from 'react';
import type { FC } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Experience from '../experienceList';
import ExperienceListItem from './ExperienceListItem';
import {faBriefcase, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

const currentDate = moment();
const dateOfBirth = moment('1991-10-03');
const startWorkingDate = moment('2015-04-01');

const age = currentDate.diff(dateOfBirth, 'years');
const exp = currentDate.diff(startWorkingDate, 'years');

const Description: FC = () => (
    <div className="
    h-auto lg:w-[690px] bg-neutral-600
    flex items-start p-5 flex-col relative
    w-full large:m-0
  ">
        <h4 className="font-bold mb-[15px] large:text-body2">ABOUT ME</h4>

        <span className="font-bold text-primary-300 mb-[15px] text-body1">
      {`${age} years old | ${exp} years experience | Sarajevo, Bosnia and Herzegovina`}
    </span>

        <span className="font-bold mb-[15px] text-body1 text-neutral-50">
      Full stack developer with accent on frontend, specialied in React + Redux and vanilla JavaScript.
    </span>

        <span className="mb-5 text-body1 text-neutral-50">
      With higher education in telecommunications, transitioned into web development.
      Started as a backend developer, but soon into the career got familiar with frontend as well.
      Worked with various technologies and languages some of them being: JS ecosystem, WebGL,
      Ruby on Rails and .NET. Focused on implementing robust, UX friendly features with minimum
      cognitive friction. When not coding, I am Researching UX topics, some of which are:
      psychology in web design, UI, HCI, and design thinking. Always up for a new challange
      and known for taking initiative
    </span>

        <span className="absolute top-5 right-5 w-[172px] italic text-center text-caption text-neutral-50">
      "Jack of all trades, master of none, but better than master of one"
    </span>

        {/* Experience Section */}
        <div className="flex items-center mb-5">
            <div className="text-[18px] text-primary-300 mr-2.5">
                <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <h6 className="text-neutral-50 font-medium">EXPERIENCE</h6>
        </div>

        <ul className="list-none border-l-2 border-neutral-50 pl-[15px] relative ml-20 mb-5">
            {Experience.map(e => <ExperienceListItem key={e.title} {...e} />)}
        </ul>

        {/* Education Section */}
        <div className="flex items-center mb-5">
            <div className="text-[18px] text-primary-300 mr-2.5">
                <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <h6 className="text-neutral-50 font-medium">EDUCATION</h6>
        </div>

        <ul className="list-none border-l-2 border-neutral-50 pl-[15px] relative ml-20 mb-5">
            <ExperienceListItem
                endDate="2015"
                startDate="2013"
                title="Masters, Telecommunications"
                responsibilities={["NFC Attendance system  (Android)"]}
            />
            <ExperienceListItem
                endDate="2013"
                startDate="2010"
                title="Bachelors, Telecommunications"
                responsibilities={["Reconfigurable active RC filter"]}
            />
        </ul>
    </div>
);

export default Description;