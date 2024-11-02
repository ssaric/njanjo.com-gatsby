// pages/about.tsx
import React from 'react';
import type {FC} from 'react';
import Layout from '../components/Layout';
import Description from "../components/Description";
import Profile from "../components/Profile";
import Socials from "../components/Socials";
import SEO from "../components/Seo";

const About: FC = () => {
    return (
        <SEO title="About">
            <Layout>
                <div className={`
       flex lg:flex-row flex-1 flex-col
       lg:items-start lg:justify-center
       overflow-y-auto lg:pt-[100px] gap-x-4
        p-0
     `}>
                    <div className="w-full lg:w-1/2 xl:w-1/3  flex flex-col">
                        <Profile/>
                        <Socials/>
                    </div>
                    <Description/>
                </div>
            </Layout>
        </SEO>
    );
};

export default About;