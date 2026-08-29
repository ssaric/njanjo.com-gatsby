import React from 'react';
import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Experience from '../experienceList';
import { summaryLong, quote, education } from '../cv';
import Stats from './Stats';
import ExperienceListItem from './ExperienceListItem';
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Description: FC = () => (
    <div className="w-full max-w-[56.25rem] mx-auto px-6 lg:px-10 py-10">

        {/* Stats bar (mobile only; desktop shows it in the hero) */}
        <Stats className="lg:hidden mb-8 pb-8 border-b border-neutral-500/50" />

        {/* Bio */}
        <div className="mb-10">
            {summaryLong.map((paragraph, i) => (
                <p
                    key={paragraph}
                    className={i === 0
                        ? 'lg:hidden text-neutral-50 text-[1rem] leading-relaxed font-semibold mb-4'
                        : 'text-neutral-200 text-[0.9375rem] leading-relaxed'}
                >
                    {paragraph}
                </p>
            ))}

            <blockquote className="
                mt-6 pl-4 border-l-2 border-primary-300/40
                text-neutral-300 italic text-caption
            ">
                "{quote}"
            </blockquote>
        </div>

        {/* Experience Section */}
        <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-primary-300/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBriefcase} className="text-primary-300 text-sm" />
                </div>
                <h5 className="text-neutral-50 font-bold text-[1.125rem] uppercase tracking-wide">Experience</h5>
                <div className="flex-1 h-px bg-neutral-500/50 ml-2" />
            </div>

            <ul className="list-none border-l-2 border-neutral-500 pl-[0.9375rem] relative ml-20">
                {Experience.map(e => <ExperienceListItem key={e.title} {...e} />)}
            </ul>
        </div>

        {/* Education Section */}
        <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-primary-300/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-primary-300 text-sm" />
                </div>
                <h5 className="text-neutral-50 font-bold text-[1.125rem] uppercase tracking-wide">Education</h5>
                <div className="flex-1 h-px bg-neutral-500/50 ml-2" />
            </div>

            <ul className="list-none border-l-2 border-neutral-500 pl-[0.9375rem] relative ml-20">
                {education.map(e => <ExperienceListItem key={e.title} {...e} />)}
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
