// components/ExperienceListItem.tsx
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
        className="text-neutral-50 mb-[30px] relative before:content-[attr(data-date-end)_'\A'_attr(data-date-start)] before:whitespace-pre before:-left-[135px] before:absolute before:font-bold before:text-right before:text-body2 before:flex before:-top-[5px] before:justify-end before:w-[100px] after:absolute after:-left-[22px] after:top-[7px] after:bg-neutral-50 after:rounded-full after:h-[13px] after:w-[13px] after:block after:content-['']"
        data-date-end={endDate}
        data-date-start={startDate}
    >
        {logo && (
            <div className="flex mb-2.5">
                <img
                    alt={`${title}-pic`.toLowerCase()}
                    className="h-[25px] w-[30px] object-scale-down mr-2.5"
                    src={logo}
                />
                <div className="flex flex-col">
                    <h5 className="font-bold leading-none">{title}</h5>
                    {role && <h6 className="font-bold text-[15px] mt-[3px]">{role}</h6>}
                </div>
            </div>
        )}
        {!logo && <h6 className="description-timeline__item-title font-bold">{title}</h6>}
        <div className="flex flex-col ml-10">
            {responsibilities?.map(responsibility => (
                <span key={responsibility} className="text-body2 mb-1.5">
          {responsibility}
        </span>
            ))}
        </div>
    </li>
);

export default ExperienceListItem;