// components/Email.tsx
import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const EMAIL = "sanjin.saric1991@gmail.com";

const Email: FC = () => {
    const [statusTextVisible, setStatusTextVisible] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (statusTextVisible) {
            timer = setTimeout(() => {
                setStatusTextVisible(false);
            }, 1500);
        }
        return () => clearTimeout(timer);
    }, [statusTextVisible]);

    return (
        <CopyToClipboard
            text={EMAIL}
            onCopy={() => setStatusTextVisible(true)}
        >
            <button
                type="button"
                className="
                   btn-primary overflow-visible flex-col
                   w-auto
                   relative
                   [&_.btn__text]:normal-case
                   [&_.btn__icon]:m-0 [&_.btn__icon]:mb-[5px]
                   group

               "
            >
                <FontAwesomeIcon
                    className="btn__icon m-0 w-8"
                    icon={faEnvelope}
                    size="xs"
                />
                <span className="btn__text group-hover:text-primary-200 text-sm">
                   {EMAIL}
               </span>
                <span
                    className={classNames(
                        'absolute right-2.5 top-2.5 z-50',
                        'text-white text-sm',
                        'opacity-0',
                        'transition-all duration-200 ease-[cubic-bezier(0.02,0.01,0.47,1)]',
                        { 'opacity-100': statusTextVisible }
                    )}
                >
                   Copied!
               </span>
            </button>
        </CopyToClipboard>
    );
};

export default Email;