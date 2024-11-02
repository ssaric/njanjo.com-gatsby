// components/Project.tsx
import React from 'react';
import type { FC } from 'react';

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
      block w-[300px] min-h-[300px] m-5 p-5
      bg-neutral-600 no-underline
      transition-transform duration-200 ease-[cubic-bezier(0.02,0.01,0.47,1)]
      hover:scale-105
    "
        href={link}
        target="_blank"
        rel="noopener noreferrer"
    >
        <div className="
      w-full h-[200px] mb-5
      overflow-hidden rounded-lg
    ">
            <img
                className="w-full h-full object-cover"
                alt={`${title} project`}
                src={picture}
            />
        </div>
        <h6
            title={title}
            className="
        text-neutral-50 font-medium mb-2.5
        truncate
      "
        >
            {title}
        </h6>
        <div className="
      text-neutral-50 text-sm
      line-clamp-3
    ">
            {description}
        </div>
    </a>
);

export default Project;