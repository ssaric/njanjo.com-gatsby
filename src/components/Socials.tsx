import React from 'react';
import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import Email from './Email';
import { contact } from '../cv';

const Socials: FC = () => (
    <div className="flex items-center gap-3 mt-3 flex-wrap">
        <a
            href={contact.linkedin}
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
            href={contact.github}
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
        <a
            href="/cv.pdf"
            className="
                flex items-center gap-2 px-3 py-2 rounded
                bg-primary-300/15 hover:bg-primary-300/30
                text-primary-200
                transition-colors duration-200 text-sm
            "
        >
            <FontAwesomeIcon icon={faFileArrowDown} />
            <span>Download CV</span>
        </a>
    </div>
);

export default Socials;
