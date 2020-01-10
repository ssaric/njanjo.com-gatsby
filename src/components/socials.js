import React from 'react';
import Social from './social';

import './socials.scss';
import Email from './email';

const Socials = () => (
    <div className="socials">
        <Social text="LinkedIn" href="https://www.linkedin.com/in/sanjin-%C5%A1ari%C4%87-9a1781105/" icon="linkedin" />
        <Social text="GitHub" href="https://github.com/ssaric" icon="github" />
        <Email />
    </div>
);

Socials.propTypes = {
};
Socials.defaultProps = {
};

export default Socials;
