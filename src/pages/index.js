import React, { Component } from 'react';
import TypeIt from 'typeit';
import Logo from '../images/logo.svg';

import Layout from '../components/layout';

import './home.scss';

class Index extends Component {
    componentDidMount() {
        const thirdText = new TypeIt('#welcome-text-row-3', {
            speed: 100,
            cursor: false,
        });
        const secondText = new TypeIt('#welcome-text-row-2', {
            speed: 100,
            cursor: false,
            afterComplete: () => {
                thirdText.go();
            },
        });
        const firstText = new TypeIt('#welcome-text-row-1', {
            speed: 100,
            cursor: false,
            afterComplete: () => {
                secondText.go();
            },
        });
        firstText.go();
    }

    render() {
        return (
            <Layout>
                <Logo className="logo" />
                <div className="home">
                    <h5 id="welcome-text-row-1" className="welcome-text-row">Hi, my name is</h5>
                    <h2 id="welcome-text-row-2" className="welcome-text-row">Sanjin Šarić</h2>
                    <h5 id="welcome-text-row-3" className="welcome-text-row">Software Engineer</h5>
                </div>
            </Layout>
        );
    }
}

export default Index;
