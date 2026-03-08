import React from 'react';
import type { FC } from 'react';
import Layout from './Layout';
import Description from './Description';
import Profile from './Profile';
import Socials from './Socials';

const AboutPage: FC = () => (
    <Layout>
        <div className="
            flex flex-1 flex-col
            overflow-y-auto
            p-0
        ">
            {/* Hero header */}
            <div className="
                w-full bg-neutral-600
                flex flex-col lg:flex-row items-center lg:items-stretch
                animate-fade-up
            ">
                <Profile />
                <div className="flex flex-col justify-center flex-1 p-6 lg:p-10">
                    <span className="text-primary-200 text-caption font-semibold tracking-widest uppercase mb-2">
                        About me
                    </span>
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
