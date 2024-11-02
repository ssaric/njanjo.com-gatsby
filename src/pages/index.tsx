// pages/index.tsx
import React from 'react';
import type {FC} from 'react';
import {ReactComponent as Logo} from '../images/logo.svg';
import Layout from '../components/Layout';
import Link from '../components/Link';

const Index: FC = () => (
    <Layout>
        <div className="flex items-center relative w-full h-full">
            <Logo className="fixed top-[calc(50%-250px)] left-[calc(50%-250px)] z-10 fill-primary-300/50 h-[500px]"/>
            <div className="flex flex-col items-center justify-center flex-1 z-20">
                <h5 className="uppercase mb-2.5 text-center">Hi, my name is</h5>
                <h2 className="uppercase mb-2.5 text-center">Sanjin Šarić</h2>
                <h5 className="uppercase mb-2.5 text-center">Software Engineer</h5>
                <Link
                    className="w-[150px] h-[50px] rounded bg-neutral-600 "
                    href="/about"
                    icon="user-circle"
                    text="About me"
                />
            </div>
        </div>
    </Layout>
);

export default Index;