// components/Navbar.tsx
import React, { useState } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import Link from './Link';
import { ReactComponent as Logo } from '../images/logo.svg';

type Props = {
    className?: string;
}

const Navbar: FC<Props> = ({ className }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav
            className={classNames(
                // .navbar
                'lg:h-full lg:w-[55px] flex lg:flex-col lg:justify-start bg-neutral-600',
                'justify-start py-4 px-2',
                'transition-[width] duration-[600ms] ease-[cubic-bezier(0.075,0.82,0.165,1)]',
                'w-full h-[60px] flex-row justify-between py-2.5 px-5',
                { '!w-[180px]': expanded },
                className
            )}
        >
            <div
                onClick={() => {
                    setExpanded(prev => !prev);
                }}
                // .navbar-button
                className="min-w-[40px] max-w-[40px] h-[40px] cursor-pointer"
            >
                <Logo className="w-full h-full" />
            </div>

            {/* .navbar__links-wrapper */}
            <div className={classNames(
                'flex flex-row justify-between items-center',
                'lg:overflow-hidden lg:flex lg:flex-col lg:justify-start lg:mt-4 lg:items-start',

            )}>
                <Link
                    className={classNames(
                        // .navbar__link
                        'justify-start pl-0',
                        'lg:w-auto lg:justify-center',
                        'lg:[&_.btn__text]:hidden'
                    )}
                    href="/about"
                    icon="user-circle"
                    text="About"
                />
                <Link
                    className={classNames(
                        'justify-start pl-0',
                        'lg:w-auto lg:justify-center',
                        'lg:[&_.btn__text]:hidden'
                    )}
                    href="/projects"
                    icon="code"
                    text="Projects"
                />
            </div>
        </nav>
    );
};

export default Navbar;