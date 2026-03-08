import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pkg from 'react-copy-to-clipboard';
const { CopyToClipboard } = pkg;
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
                    flex items-center gap-2 px-3 py-2 rounded
                    bg-neutral-500/50 hover:bg-primary-300/20
                    text-neutral-100 hover:text-primary-200
                    transition-colors duration-200 text-sm
                    cursor-pointer border-none relative
                    font-sans
                "
            >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{EMAIL}</span>
                <span
                    className={classNames(
                        'absolute -top-6 left-1/2 -translate-x-1/2',
                        'text-primary-200 text-xs font-semibold',
                        'opacity-0 transition-all duration-200',
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
