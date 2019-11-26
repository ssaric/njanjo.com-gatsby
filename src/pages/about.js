import React from 'react';
import Profile from '../components/profile';
import Description from '../components/description';
import Layout from '../components/layout';

import './about.scss';

export default function About() {
    return (
        <Layout>
            <div className="about">
                <Profile />
                <Description />
            </div>
        </Layout>
    );
}
