import React from 'react';
import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface ProjectProps {
    picture: string;
    title: string;
    link: string;
    description: string;
}

const Project: FC<ProjectProps> = ({
    picture,
    title,
    link,
    description,
}) => (
    <a
        className="
            group block rounded-lg overflow-hidden
            bg-neutral-600 no-underline
            transition-all duration-200 ease-[cubic-bezier(0.02,0.01,0.47,1)]
            hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
        "
        href={link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <div className="w-full h-[180px] overflow-hidden bg-neutral-500">
            <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt={`${title} project`}
                src={typeof picture === 'string' ? picture : picture.src}
            />
        </div>
        <div className="p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
                <h6 className="text-neutral-50 font-semibold text-[16px] leading-snug">
                    {title}
                </h6>
                <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-neutral-400 text-xs mt-1 flex-shrink-0 group-hover:text-primary-200 transition-colors"
                />
            </div>
            <p className="text-neutral-300 text-[13px] leading-relaxed line-clamp-3">
                {description}
            </p>
        </div>
    </a>
);

export default Project;
