import Philipa from './images/philipa.png';
import Comtrade from './images/ct_logo.png';
import Evomecs from './images/evomecs_logo.png';
import Socex from './images/socialexplorer_logo.png';
import GlobalGPS from './images/globalgps_logo.png';
import Journee from './images/journee.png';
import Prezi from './images/prezi.png';

export default [

    {
        title: 'Prezi',
        startDate: 'June 2025',
        endDate: 'Present',
        role: 'Senior Software Engineer',
        logo: Prezi,
        responsibilities: [
            'introduced codestyle guidelines and vastly improved the linting process in an over a decade old legacy project',
            'held multiple AI workshops focused on rapid development and bridging the gap between engineering and product',
            'delivered project design docs on a complex document importing feature',
            'led and architected features for editing documents in the browser',
            'set up E2E pipelines for improving BDD in new AI-driven development',
        ]
    },
    {
        title: 'Journee Technologies GmbH',
        startDate: 'June 2023',
        endDate: 'June 2025',
        role: 'Senior Software Engineer',
        logo: Journee,
        responsibilities: [
            'introduced E2E testing with Playwright and built developer tools that significantly improved DX and workflow velocity',
            'led full-stack feature development while pitching and steering product direction across teams',
            'architected and implemented a comprehensive video conferencing system from the ground up',
            'led the modernization of the company\'s web presence with a redesign using PHP and Tailwind CSS',
        ],
    },
    {
        title: 'Philipa Legal Tech',
        startDate: 'Mar 2021',
        endDate: 'June 2023',
        role: 'Tech Lead',
        logo: Philipa,
        responsibilities: [
            'led technical strategy and architecture decisions, including implementing an Nx monorepo that improved project structure and team collaboration',
            'established agile methodologies and mentored junior developers while driving UX-focused feature development',
            'built QA automation infrastructure using Cypress.io and designed CI/CD pipelines for Azure deployment',
            'spearheaded full-stack development with React.js and .NET Core, making key architectural decisions that shaped the tech stack',
        ],
    },
    {
        title: 'Comtrade',
        startDate: 'Dec 2019',
        endDate: 'Mar 2021',
        role: 'Lead Engineer',
        logo: Comtrade,
        responsibilities: [
            'set up build environments for new projects and refactored ESLint and TypeScript configurations',
            'hosted workshops on React best practices for the engineering team',
            'refactored a Nest.js + TypeORM backend to support multitenancy',
            'improved test coverage by adding integration tests and more robust unit tests across both frontend and backend',
            'piloted the creation of a GitLab monitoring app and worked with event sourcing via Kafka',
        ],
    },
    {
        title: 'Evomecs GmbH',
        startDate: 'Jan 2019',
        endDate: 'Oct 2019',
        role: 'Software Engineer',
        logo: Evomecs,
        responsibilities: [
            'consolidated build systems for development and production using Webpack and Rollup',
            'introduced code proofing tools, style guides, and began drafting company design guidelines',
            'developed React components with Relay.js and backend GraphQL endpoints in .NET',
        ],
    },
    {
        title: 'Social Explorer Inc.',
        startDate: 'Mar 2016',
        endDate: 'Jan 2019',
        role: 'Software Engineer',
        logo: Socex,
        responsibilities: [
            'built React components within a proprietary framework and maintained the company fork of mapbox-gl-js',
            'piloted the creation of bash tooling for faster bootstrapping workflows',
            'refactored a Ruby on Rails project and implemented a new website design',
        ],
    },
    {
        title: 'GlobalGPS BH',
        startDate: 'Apr 2015',
        endDate: 'Mar 2016',
        role: 'Software Engineer',
        logo: GlobalGPS,
        responsibilities: [
            'developed API endpoints in an OSGi Java framework',
            'bootstrapped and developed features for the company Android application',
            'maintained company network infrastructure',
        ],
    },
];
