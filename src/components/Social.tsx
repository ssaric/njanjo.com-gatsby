import React from 'react';
import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const brandIconMap: Record<string, IconDefinition> = {
    'github': faGithub,
    'linkedin': faLinkedin,
};

interface SocialProps {
    text: string;
    href: string;
    icon: string;
}

const Social: FC<SocialProps> = ({ icon, href, text }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
        <button
            type="button"
            className="
       btn-primary relative flex-col
       w-auto
       [&_.btn__text]:normal-case
       [&_.btn__icon]:m-0 [&_.btn__icon]:mb-[5px]
       group
     "
        >
            <div className="btn__icon m-0">
                <FontAwesomeIcon icon={brandIconMap[icon]} size="1x" />
            </div>
            <span className="btn__text
            group-hover:text-primary-200
            ">{text}</span>
        </button>
    </a>
);

export default Social;
