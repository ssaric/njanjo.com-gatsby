import Comtrade from './images/ct_logo.png';
import Evomecs from './images/evomecs_logo.png';
import Socex from './images/socialexplorer_logo.png';
import GlobalGPS from './images/globalgps_logo.png';

export default [
    {
        title: 'Comtrade',
        startDate: 'Dec 2019',
        endDate: 'Present',
        role: 'Lead Engineer',
        logo: Comtrade,
        responsibilities: [
            'introduce a build environment for a new project',
            'refactoring eslint and typescript usage',
            'workshop host for React best practices',
            'successfully refactored backend written in Nest.js + TypeORM to support multitenancy',
            'improved code coverage (jest) by adding integration tests and more robust unit test on both backend and frontend of a big commercial app',
            'gained familiarity with event sourcing (kafka)',
            'piloted creation of GitLab monitoring app',
            'groomed and created number of jira tasks',
        ],
    },
    {
        title: 'Evomecs GmbH',
        startDate: 'Jan 2019',
        endDate: 'Oct 2019',
        role: 'Software Engineer',
        logo: Evomecs,
        responsibilities: [
            'clean up and consolidate build systems for development and production (webpack and rollup)',
            'introduce code proofing tools and heavily refactor existing projects',
            'introduce code style guide and CSS style guide. Start drafting the company design guidelines',
            'develop React components in Relay.js',
            'develop backend GraphQL endpoints in .NET',
        ],
    },
    {
        title: 'Social Explorer Inc.',
        startDate: 'Mar 2016',
        endDate: 'Jan 2019',
        role: 'Software Engineer',
        logo: Socex,
        responsibilities: [
            'created myriad of React components in propriertary framework',
            'piloted the creation and development of bash script for faster bootstraping process',
            'refactored Ruby on Rails Project and implemented new website design',
            'maintained company fork of mapbox-gl-js and added new features to the renderer',
            'utilized own initiative in solely developing an idea floating around the office',
        ],
    },
    {
        title: 'GlobalGPS BH',
        startDate: 'Apr 2015',
        endDate: 'Mar 2016',
        role: 'Software Engineer',
        logo: GlobalGPS,
        responsibilities: [
            'developed API endpoints in OSGi Java framework',
            'boostraped and developed featuers for company Android application',
            'maintained company network',
        ],
    },
];
