import React from 'react';
import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Experience from '../experienceList';
import ExperienceListItem from './ExperienceListItem';
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const diffInYears = (from: Date, to: Date) => {
    let years = to.getFullYear() - from.getFullYear();
    const monthDiff = to.getMonth() - from.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && to.getDate() < from.getDate())) years--;
    return years;
};

const now = new Date();
const age = diffInYears(new Date('1991-10-03'), now);
const exp = diffInYears(new Date('2015-04-01'), now);

const Description: FC = () => (
    <div className="w-full max-w-[900px] mx-auto px-6 lg:px-10 py-10">

        {/* Stats bar */}
        <div className="flex gap-6 sm:gap-10 mb-8 pb-8 border-b border-neutral-500/50">
            <div className="flex flex-col">
                <span className="text-primary-200 text-[24px] font-bold leading-none">{age}</span>
                <span className="text-neutral-300 text-caption uppercase tracking-wider mt-1">Years old</span>
            </div>
            <div className="w-px bg-neutral-500" />
            <div className="flex flex-col">
                <span className="text-primary-200 text-[24px] font-bold leading-none">{exp}+</span>
                <span className="text-neutral-300 text-caption uppercase tracking-wider mt-1">Years experience</span>
            </div>
            <div className="w-px bg-neutral-500" />
            <div className="flex flex-col">
                <span className="text-primary-200 text-[24px] font-bold leading-none">Sarajevo</span>
                <span className="text-neutral-300 text-caption uppercase tracking-wider mt-1">Bosnia & Herzegovina</span>
            </div>
        </div>

        {/* Bio */}
        <div className="mb-10">
            <p className="text-neutral-50 text-[16px] leading-relaxed font-semibold mb-4">
                Full stack developer with accent on frontend, specialized in React + Redux and vanilla JavaScript. Product engineering mindset: UX is king — code follows.
            </p>
            <p className="text-neutral-200 text-[15px] leading-relaxed">
                With over a decade of experience across frontend and backend development, my journey began in telecommunications before transitioning into web development. Starting as a backend developer, I quickly expanded into frontend, working with technologies across the JS ecosystem, WebGL, Ruby on Rails, and .NET. I'm driven by implementing robust, UX-friendly features with minimum cognitive friction, and I've grown to lead projects and oversee feature implementation with a strong focus on delivering results and removing ambiguities. My expertise extends to understanding AI systems and their practical applications. When not coding, I dedicate time to researching UX topics including psychology in web design, UI, HCI, design thinking, and deep learning. I take initiative and embrace new challenges, combining technical expertise with strategic thinking.
            </p>

            <blockquote className="
                mt-6 pl-4 border-l-2 border-primary-300/40
                text-neutral-300 italic text-caption
            ">
                "Jack of all trades, master of none, but better than master of one"
            </blockquote>
        </div>

        {/* Experience Section */}
        <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-primary-300/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBriefcase} className="text-primary-300 text-sm" />
                </div>
                <h5 className="text-neutral-50 font-bold text-[18px] uppercase tracking-wide">Experience</h5>
                <div className="flex-1 h-px bg-neutral-500/50 ml-2" />
            </div>

            <ul className="list-none border-l-2 border-neutral-500 pl-[15px] relative ml-20">
                {Experience.map(e => <ExperienceListItem key={e.title} {...e} />)}
            </ul>
        </div>

        {/* Education Section */}
        <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-primary-300/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-primary-300 text-sm" />
                </div>
                <h5 className="text-neutral-50 font-bold text-[18px] uppercase tracking-wide">Education</h5>
                <div className="flex-1 h-px bg-neutral-500/50 ml-2" />
            </div>

            <ul className="list-none border-l-2 border-neutral-500 pl-[15px] relative ml-20">
                <ExperienceListItem
                    endDate="2015"
                    startDate="2013"
                    title="Masters, Telecommunications"
                    responsibilities={["NFC Attendance system (Android)"]}
                />
                <ExperienceListItem
                    endDate="2013"
                    startDate="2010"
                    title="Bachelors, Telecommunications"
                    responsibilities={["Reconfigurable active RC filter"]}
                />
            </ul>
        </div>
    </div>
);

export default Description;
