import React from 'react';
import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Email from './Email';

const Socials: FC = () => (
    <div className="flex items-center gap-3 mt-3 flex-wrap">
        <a
            href="https://www.linkedin.com/in/sanjin-%C5%A1ari%C4%87-9a1781105/"
            target="_blank"
            rel="noopener noreferrer"
            className="
                flex items-center gap-2 px-3 py-2 rounded
                bg-neutral-500/50 hover:bg-primary-300/20
                text-neutral-100 hover:text-primary-200
                transition-colors duration-200 text-sm
            "
        >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
        </a>
        <a
            href="https://github.com/ssaric"
            target="_blank"
            rel="noopener noreferrer"
            className="
                flex items-center gap-2 px-3 py-2 rounded
                bg-neutral-500/50 hover:bg-primary-300/20
                text-neutral-100 hover:text-primary-200
                transition-colors duration-200 text-sm
            "
        >
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub</span>
        </a>
        <Email />
    </div>
);

export default Socials;
