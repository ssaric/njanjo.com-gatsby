// components/Socials.tsx
import React from 'react';
import type { FC } from 'react';
import Social from './Social';
import Email from './Email';

const Socials: FC = () => (
    <div className="
    p-[15px] flex w-full bg-neutral-600
    justify-center flex-col items-center
    lg:flex-row lg:justify-between lg:items-center
    [&>*]:large:mb-5
  ">
        <Social
            text="LinkedIn"
            href="https://www.linkedin.com/in/sanjin-%C5%A1ari%C4%87-9a1781105/"
            icon="linkedin"
        />
        <Social
            text="GitHub"
            href="https://github.com/ssaric"
            icon="github"
        />
        <Email />
    </div>
);

export default Socials;