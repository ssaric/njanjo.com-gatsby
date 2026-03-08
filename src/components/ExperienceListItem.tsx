import React from 'react';
import type { FC } from 'react';

interface ExperienceListItemProps {
    endDate: string;
    startDate: string;
    logo?: string;
    title: string;
    role?: string;
    responsibilities?: string[];
}

const ExperienceListItem: FC<ExperienceListItemProps> = ({
    endDate,
    startDate,
    logo,
    title,
    role,
    responsibilities,
}) => (
    <li
        className="
            text-neutral-50 mb-8 relative
            before:content-[attr(data-date-end)_'\A'_attr(data-date-start)]
            before:whitespace-pre before:-left-[135px] before:absolute
            before:font-semibold before:text-right before:text-caption before:text-neutral-300
            before:flex before:-top-[3px] before:justify-end before:w-[100px]
            after:absolute after:-left-[22px] after:top-[5px]
            after:bg-primary-300 after:rounded-full after:h-[11px] after:w-[11px]
            after:block after:content-['']
            after:ring-2 after:ring-neutral-700
        "
        data-date-end={endDate}
        data-date-start={startDate}
    >
        {logo && (
            <div className="flex items-center mb-2 gap-3">
                <img
                    alt={`${title}-pic`.toLowerCase()}
                    className="h-[24px] w-[28px] object-scale-down"
                    src={typeof logo === 'string' ? logo : logo.src}
                />
                <div className="flex flex-col">
                    <h5 className="font-bold text-[16px] leading-tight">{title}</h5>
                    {role && (
                        <span className="text-primary-200 text-caption mt-0.5">{role}</span>
                    )}
                </div>
            </div>
        )}
        {!logo && <h6 className="font-bold mb-1">{title}</h6>}
        <div className="flex flex-col ml-[40px] gap-1">
            {responsibilities?.map(responsibility => (
                <span key={responsibility} className="text-neutral-200 text-[13px] leading-relaxed">
                    — {responsibility}
                </span>
            ))}
        </div>
    </li>
);

export default ExperienceListItem;
