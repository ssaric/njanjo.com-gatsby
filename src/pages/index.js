import React from 'react';
import Logo from '../images/logo.svg';

import Layout from '../components/layout';

import './home.scss';
import Link from '../components/link';

const Index = () => (
    <Layout>
        <Logo className="logo" />
        <div className="home">
            <h5 id="welcome-text-row-1" className="welcome-text-row">Hi, my name is</h5>
            <h2 id="welcome-text-row-2" className="welcome-text-row">Sanjin Šarić</h2>
            <h5 id="welcome-text-row-3" className="welcome-text-row">Software Engineer</h5>
            <Link className="about-me-link" href="/about" icon="user-circle" text="About me" />
        </div>
    </Layout>
);

export default Index;
