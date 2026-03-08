import React from 'react';
import type { FC } from 'react';
import Logo from '../images/logo.svg?react';
import Layout from './Layout';

const IndexPage: FC = () => (
    <Layout>
        <div className="flex items-center relative w-full h-full overflow-hidden">
            {/* Background logo - subtle pulsing */}
            <Logo className="
                fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                z-0 fill-primary-300 opacity-[0.04] animate-pulse-slow
                h-[600px] lg:h-[700px]
                pointer-events-none select-none
            "/>

            {/* Main content */}
            <div className="flex flex-col items-start justify-center flex-1 z-20 px-8 lg:px-20 max-w-[800px] mx-auto">

                {/* Greeting */}
                <span className="
                    text-primary-200 text-body1 font-semibold tracking-widest uppercase mb-4
                    animate-fade-up
                ">
                    Hi, my name is
                </span>

                {/* Name */}
                <h1 className="
                    text-neutral-50 font-bold leading-[1.05]
                    text-[42px] sm:text-[56px] lg:text-[72px]
                    mb-3 animate-fade-up delay-100
                ">
                    Sanjin Šarić
                </h1>

                {/* Role */}
                <h2 className="
                    text-neutral-200 font-normal
                    text-[20px] sm:text-[28px] lg:text-[36px]
                    mb-6 animate-fade-up delay-200
                ">
                    Senior Software Engineer
                </h2>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-primary-300 mb-6 animate-slide-in delay-300" />

                {/* Tagline */}
                <p className="
                    text-neutral-100 text-[16px] sm:text-[18px] leading-relaxed
                    max-w-[520px] mb-8 animate-fade-up delay-400
                ">
                    Product engineering mindset — UX is king, code follows.
                    <br />
                    <span className="text-neutral-300">
                        Building robust, user-friendly software for over a decade.
                    </span>
                </p>

                {/* Stats row */}
                <div className="flex gap-8 mb-10 animate-fade-up delay-500">
                    <div className="flex flex-col">
                        <span className="text-primary-200 text-[28px] font-bold leading-none">10+</span>
                        <span className="text-neutral-300 text-caption uppercase tracking-wider mt-1">Years</span>
                    </div>
                    <div className="w-px bg-neutral-500" />
                    <div className="flex flex-col">
                        <span className="text-primary-200 text-[28px] font-bold leading-none">End to End</span>
                        <span className="text-neutral-300 text-caption uppercase tracking-wider mt-1">Feature Delivery</span>
                    </div>
                    <div className="w-px bg-neutral-500" />
                    <div className="flex flex-col">
                        <span className="text-primary-200 text-[28px] font-bold leading-none">Full Stack</span>
                        <span className="text-neutral-300 text-caption uppercase tracking-wider mt-1">Engineering</span>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex gap-4 animate-fade-up delay-600">
                    <a
                        href="/about"
                        className="
                            px-6 py-3 bg-primary-300 text-white text-sm font-semibold uppercase tracking-wider
                            rounded hover:bg-primary-100 transition-colors duration-200
                        "
                    >
                        About me
                    </a>
                    <a
                        href="/projects"
                        className="
                            px-6 py-3 border border-neutral-400 text-neutral-100 text-sm font-semibold uppercase tracking-wider
                            rounded hover:border-primary-300 hover:text-primary-200 transition-colors duration-200
                        "
                    >
                        Projects
                    </a>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="
                hidden lg:block absolute right-12 top-1/2 -translate-y-1/2
                w-px h-[200px] bg-gradient-to-b from-transparent via-neutral-500 to-transparent
                animate-fade-in delay-700
            " />
            <div className="
                hidden lg:block absolute right-20 top-1/2 -translate-y-1/2
                w-px h-[120px] bg-gradient-to-b from-transparent via-primary-300/30 to-transparent
                animate-fade-in delay-800
            " />
        </div>
    </Layout>
);

export default IndexPage;
