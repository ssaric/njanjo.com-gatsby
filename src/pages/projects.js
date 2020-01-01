import React from 'react';
import Layout from '../components/layout';
import ProjectsList from '../projects-list';

import Project from '../components/project';
import './projects.scss';

export default function Projects() {
    return (
        <Layout>
            <div className="projects">
                {ProjectsList.map(p => <Project {...p} />)}
            </div>
        </Layout>
    );
}
