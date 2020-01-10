import React from 'react';
import Profile from '../components/profile';
import Description from '../components/description';
import Layout from '../components/layout';

import './about.scss';
import Socials from '../components/socials';

export default function About() {
    return (
        <Layout>
            <div className="about">
                <div className="about__wrapper">
                    <Profile />
                    <Socials />
                </div>
                <Description />
            </div>
        </Layout>
    );
}
