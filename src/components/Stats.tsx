import React from 'react';
import type { FC } from 'react';
import { contact } from '../cv';

const diffInYears = (from: Date, to: Date): number => {
    let years = to.getFullYear() - from.getFullYear();
    const monthDiff = to.getMonth() - from.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && to.getDate() < from.getDate())) years--;
    return years;
};

const now = new Date();
const age = diffInYears(new Date(contact.birthDate), now);
const exp = diffInYears(new Date(contact.careerStart), now);

type Props = { className?: string };

const Stats: FC<Props> = ({ className = '' }) => (
    <div className={`flex gap-6 sm:gap-10 ${className}`}>
        <div className="flex flex-col">
            <span className="text-primary-200 text-[1.5rem] font-bold leading-none">{age}</span>
            <span className="text-neutral-300 text-caption uppercase tracking-wider mt-1">Years old</span>
        </div>
        <div className="w-px bg-neutral-500" />
        <div className="flex flex-col">
            <span className="text-primary-200 text-[1.5rem] font-bold leading-none">{exp}+</span>
            <span className="text-neutral-300 text-caption uppercase tracking-wider mt-1">Years experience</span>
        </div>
        <div className="w-px bg-neutral-500" />
        <div className="flex flex-col">
            <span className="text-primary-200 text-[1.5rem] font-bold leading-none">Langenfeld 🇩🇪</span>
            <span className="text-neutral-300 text-caption uppercase tracking-wider mt-1">Germany</span>
        </div>
    </div>
);

export default Stats;
