import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';
import {
    faBriefcase,
    faCode,
    faEnvelope,
    faGraduationCap,
    faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const iconMap = {
    'user-circle': faUserCircle,
    'code': faCode,
    'envelope': faEnvelope,
    'briefcase': faBriefcase,
    'graduation-cap': faGraduationCap,
    'linkedin': faLinkedin,
    'github': faGithub
};

interface LinkWrapperProps {
    href: string;
    icon: keyof typeof iconMap;
    text: string;
    className?: string;
}

const LinkWrapper: FC<LinkWrapperProps> = ({
                                               href,
                                               icon,
                                               text,
                                               className,
                                           }) => (
    <a
        href={href}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        target={href.startsWith('http') ? '_blank' : undefined}
    >
        <button type="button" className={classNames('btn-primary group', className)}>
            <div className="btn__icon">
                <FontAwesomeIcon icon={iconMap[icon]} size="1x" />
            </div>
            <span className="body-1 btn__text">{text}</span>
        </button>
    </a>
);

export default LinkWrapper;
