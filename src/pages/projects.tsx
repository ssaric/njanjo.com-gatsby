// pages/projects.tsx
import React from 'react';
import type { FC } from 'react';
import Layout from '../components/Layout';
import ProjectsList from '../projectsList';
import Project from '../components/Project';

const Projects: FC = () => (
    <Layout>
        <div className="
      flex flex-row flex-1 flex-wrap
      items-start justify-center
      overflow-y-auto lg:pt-[200px]
      p-0
    ">
            {ProjectsList.map((project) => (
                <Project key={project.title} {...project} />
            ))}
        </div>
    </Layout>
);

export default Projects;