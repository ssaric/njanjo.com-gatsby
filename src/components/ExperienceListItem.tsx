import React from 'react';
import type { FC } from 'react';

interface ExperienceListItemProps {
    endDate: string;
    startDate: string;
    logo?: { src: string };
    title: string;
    role?: string;
    technologies?: string[];
    responsibilities?: string[];
}

const ExperienceListItem: FC<ExperienceListItemProps> = ({
    endDate,
    startDate,
    logo,
    title,
    role,
    technologies,
    responsibilities,
}) => (
    <li className="text-neutral-50 mb-8 relative">
        <div
            className="
                relative flex items-center gap-3 mb-2 min-h-[24px]
                before:content-[attr(data-date-end)_'\A'_attr(data-date-start)]
                before:whitespace-pre before:-left-[8.4375rem] before:absolute
                before:font-semibold before:text-right before:text-caption before:text-neutral-300
                before:flex before:top-1/2 before:-translate-y-1/2 before:justify-end before:w-[6.25rem]
                after:absolute after:left-[calc(-0.9375rem-6.5px)] after:top-1/2 after:-translate-y-1/2
                after:bg-primary-300 after:rounded-full after:h-[11px] after:w-[11px]
                after:block after:content-['']
                after:ring-2 after:ring-neutral-700
            "
            data-date-end={endDate}
            data-date-start={startDate}
        >
            {logo && (
                <img
                    alt={`${title}-pic`.toLowerCase()}
                    className="h-[24px] w-[28px] object-scale-down"
                    src={logo.src}
                />
            )}
            <div className="flex flex-col">
                <h5 className="font-bold text-[1rem] leading-tight">{title}</h5>
                {role && (
                    <span className="text-primary-200 text-caption mt-0.5">{role}</span>
                )}
            </div>
        </div>
        <div className="flex flex-col ml-[2.5rem] gap-1">
            {responsibilities?.map(responsibility => (
                <span key={responsibility} className="text-neutral-200 text-[0.8125rem] leading-relaxed">
                    — {responsibility}
                </span>
            ))}
            {technologies && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                    {technologies.map(tech => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[0.6875rem] text-neutral-300 bg-neutral-600 border border-neutral-500/60"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </li>
);

export default ExperienceListItem;
