import React from 'react';
import type { FC } from 'react';
import Layout from './Layout';
import Description from './Description';
import Profile from './Profile';
import Socials from './Socials';
import Stats from './Stats';
import Logo from '../images/logo.svg?react';
import { summary } from '../cv';

const AboutPage: FC = () => (
    <Layout>
        <div className="
            flex flex-1 flex-col
            overflow-y-auto
            p-0
        ">
            {/* Hero header */}
            <div className="
                w-full bg-neutral-600 relative overflow-hidden shrink-0
                flex flex-col lg:flex-row items-center lg:items-stretch
                animate-fade-up
            ">
                <Logo className="
                    hidden lg:block absolute -top-16 -right-16
                    h-[420px] fill-primary-300 opacity-[0.04]
                    pointer-events-none select-none
                " />
                <Profile />
                <div className="relative flex flex-col justify-end flex-1 p-6 lg:p-10">
                    <span className="text-primary-200 text-caption font-semibold tracking-widest uppercase mb-3">
                        About me
                    </span>
                    <p className="hidden lg:block text-neutral-50 text-[1.0625rem] leading-relaxed font-semibold max-w-[37.5rem] mb-6">
                        {summary[0]}
                    </p>
                    <Stats className="hidden lg:flex mb-6" />
                    <Socials />
                </div>
            </div>

            {/* Main content */}
            <div className="animate-fade-up delay-200">
                <Description />
            </div>
        </div>
    </Layout>
);

export default AboutPage;
