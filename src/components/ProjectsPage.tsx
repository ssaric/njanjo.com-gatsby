import React from 'react';
import type { FC } from 'react';
import Layout from './Layout';
import ProjectsList from '../projectsList';
import Project from './Project';

const ProjectsPage: FC = () => (
    <Layout>
        <div className="flex flex-col flex-1 overflow-y-auto px-6 lg:px-10 py-10 lg:pt-20">
            <div className="max-w-[900px] mx-auto w-full">
                <span className="text-primary-200 text-caption font-semibold tracking-widest uppercase mb-2 block animate-fade-up">
                    Side work
                </span>
                <h2 className="text-neutral-50 font-bold text-[32px] lg:text-[40px] mb-2 animate-fade-up delay-100">
                    Projects
                </h2>
                <p className="text-neutral-300 text-[15px] mb-10 animate-fade-up delay-200">
                    Articles, tools, and experiments I've built outside of work.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-up delay-300">
                    {ProjectsList.map((project) => (
                        <Project key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </div>
    </Layout>
);

export default ProjectsPage;
