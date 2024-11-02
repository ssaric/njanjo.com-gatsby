import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
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
} from "@fortawesome/fontawesome-free-brands";

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
                                           }) => {
    const isInternal = href.startsWith('/');

    return (
        isInternal ? (
            <GatsbyLink to={href}>
                <button type="button" className={classNames('btn-primary group', className)}>
                    <div className="btn__icon">
                        <FontAwesomeIcon icon={iconMap[icon]} size="1x" />
                    </div>
                    <span className="body-1 btn__text">{text}</span>
                </button>
            </GatsbyLink>
        ) : (
            <a
                href={href}
                rel="noopener noreferrer"
                target={href.startsWith('http') ? '_blank' : undefined}
            >
                <button type="button" className={classNames('btn-primary group', className)}>
                    <div className="btn__icon">
                        <FontAwesomeIcon icon={iconMap[icon]} size="1x" />
                    </div>
                    <span className="body-1 btn__text">{text}</span>
                </button>
            </a>
        )
    );
};

export default LinkWrapper;