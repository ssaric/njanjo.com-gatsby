import React, { useState } from 'react';
import cn from 'classnames';
import './socials.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyToClipboard } from 'react-copy-to-clipboard';

let timer;
const Email = () => {
    const [statusTextVisible, setStatusTextVisible] = useState(false);
    return (
        <CopyToClipboard
            text="sanjin.saric1991@gmail.com"
            onCopy={() => {
                setStatusTextVisible(true);
                clearTimeout(timer);
                timer = setTimeout(() => {
                    setStatusTextVisible(false);
                }, 1500);
            }}
        >
            <button type="button" className="btn-primary social">
                <FontAwesomeIcon className="btn__icon" icon="envelope" />

                <span className="btn__text">sanjin.saric1991@gmail.com</span>
                <span className={cn('social__status-text', { 'social__status-text--visible': statusTextVisible })}>Copied!</span>
            </button>
        </CopyToClipboard>

    );
};

Email.propTypes = {
};
Email.defaultProps = {
};

export default Email;
