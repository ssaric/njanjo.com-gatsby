// Single source of truth for the About page and the generated CV (yarn cv).
// Pure data only: no imports, so it can be loaded by scripts outside Astro.

export type Experience = {
    title: string;
    startDate: string;
    endDate: string;
    role: string;
    technologies: string[];
    responsibilities: string[];
};

export type Education = {
    title: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
};

export type Project = {
    title: string;
    link: string;
    description: string;
};

export const contact = {
    name: 'Sanjin Šarić',
    headline: 'Staff Software Engineer',
    location: 'Langenfeld, Germany',
    email: 'sanjin.saric1991@gmail.com',
    website: 'njanjo.com',
    linkedin: 'https://www.linkedin.com/in/njanjo/',
    github: 'https://github.com/ssaric',
    birthDate: '1991-10-03',
    careerStart: '2015-04-01',
};

export const summary: string[] = [
    'Product engineer with over a decade across frontend and backend, and most recently production agentic AI systems. I own product areas end to end, from architecture through shipping, and work across teams on the tooling, standards, and technical direction a codebase is built on.',
    'I started in telecommunications, moved into web development as a backend developer and grew into frontend across the JS ecosystem, WebGL, Ruby on Rails, and .NET. Today I work as a product engineer: I ship features that actually help users, push back when a request doesn\'t add up, and set the direction — monorepo, CI/CD, testing standards — that teams build within. New product areas start as a quick POC in front of stakeholders; AI agents and the workflows around them are part of that toolkit.',
];

// Longer version of the summary used on the About page; the CV uses `summary`.
export const summaryLong: string[] = [
    summary[0],
    'I started in telecommunications before moving into web development, began as a backend developer and expanded into frontend, working across the JS ecosystem, WebGL, Ruby on Rails, and .NET. These days I see myself less as a pure full-stack developer and more as a product engineer: I care about shipping features that actually work and help users, not just closing tickets. I\'ll push back and raise concerns with product owners when something doesn\'t add up, because getting it right matters more than getting it done. Outside of coding, I research UX topics like psychology in web design, HCI, design thinking, and deep learning.',
    'As a tech lead and later across teams, I set the technical direction others build within: monorepo structure, CI/CD and testing standards, and cross-team rollouts planned so nobody\'s in-flight work breaks. I take initiative on whole new features and product areas, often building a quick POC to put something tangible in front of stakeholders, then proving out what works and bringing it back to the team. AI is part of that toolkit: I build production features with AI agents and put the workflows around them in place so the rest of the team moves faster too.',
];

export const quote = 'Jack of all trades, master of none, but better than master of one';

export const skills: Record<string, string[]> = {
    'Languages & Data': ['TypeScript', 'JavaScript', 'C#', 'Ruby', 'SQL (PostgreSQL, MSSQL)', 'Supabase', 'MongoDB', 'Kafka'],
    Frontend: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'ProseMirror', 'WebGL'],
    Backend: ['Node.js', 'Nest.js', '.NET Core', 'GraphQL', 'Prisma', 'Ruby on Rails'],
    'AI / Agents': ['Agent orchestration & tool routing', 'Claude / Anthropic API', 'Mastra', 'Claude Code', 'LLM-driven development', 'Retrieval (RAG)'],
    'Infra / DevOps': ['AWS', 'Docker', 'Nx', 'GitHub Actions', 'GitLab CI', 'Azure Pipelines'],
    Testing: ['Playwright', 'Cypress', 'Jest', 'Cucumber'],
};

export const experience: Experience[] = [
    {
        title: 'Prezi',
        startDate: 'Jun 2025',
        endDate: 'Present',
        role: 'Senior Software Engineer (cross-team)',
        technologies: ['React', 'Next.js', 'TypeScript', 'TipTap / ProseMirror', 'Yjs', 'AWS', 'Playwright', 'Mastra', 'Claude Code'],
        responsibilities: [
            'Re-architected Prezi\'s AI slide generation from flow-based layout to absolute positioning after two failed prompt reworks, pushing the invasive rewrite through a hard build-and-test cycle; cut overflow defects from ~20% to ~5% of generated slides, improved run-to-run consistency, and unlocked output formats beyond slides.',
            'Delivering the production-grade slide editor that replaces the original prototype: TipTap/ProseMirror on top of Yjs, with collaborative state syncing reliably across ~30 backend pods and a focus on data integrity under concurrent edits.',
            'Own the conversational AI agent Prezi customers use to generate and edit presentations through chat, from architecture to production: an orchestrator routing to specialist tools for branding, translation, redesign, and content editing.',
            'Led a Prettier rollout across a decade-old, multi-team codebase (~145k lines changed across 3 teams over 3 weeks) with a phased plan that avoided merge conflicts with in-flight work; adopted as the company standard.',
            'Built an internal admin tool that surfaces real user generations, cutting bad-generation triage from minutes to seconds.',
            'Partner with the VP of Design to ship static marketing pages via LLM-driven development: review their code, set up A/B tests and feature flags, and provide the guardrails that let a non-engineer ship to production safely.',
        ],
    },
    {
        title: 'Journee Technologies GmbH',
        startDate: 'Jun 2023',
        endDate: 'Jun 2025',
        role: 'Senior Software Engineer (frontend lead)',
        technologies: ['React', 'Nest.js', 'TypeScript', 'AWS', 'Tailwind CSS', 'Playwright', 'Jest', 'Cucumber', 'Prisma'],
        responsibilities: [
            'Migrated the video-conferencing system from the sunsetted Dolby API to the Vonage SDK for sessions of 5 to ~20 participants, then refactored it onto a state machine that reduced connection-drop bugs and made errors traceable.',
            'Led the frontend: made the core architecture decisions and owned application performance, keeping the app fast as features and team grew; introduced developer tooling that improved DX and shipping velocity.',
            'Built the team\'s testing culture: introduced Playwright E2E testing, wrote a large share of the unit test suite, and made tests part of the review bar.',
            'Led the modernization of the company\'s public website with a redesign in PHP and Tailwind CSS.',
        ],
    },
    {
        title: 'Philipa Legal Tech',
        startDate: 'Mar 2021',
        endDate: 'Jun 2023',
        role: 'Tech Lead',
        technologies: ['React', 'TypeScript', 'Nx', 'ProseMirror', 'C#', '.NET Core', 'Azure Pipelines', 'Cypress', 'Playwright', 'MSSQL', 'MongoDB'],
        responsibilities: [
            'Led a 4-engineer team (staff, senior, medior) and drove the core architecture decisions: the Nx monorepo, testing practices, and CI/CD standards the whole team built within.',
            'Sole owner of CI/CD for four applications plus a monolith backend; kept PR pipelines under 10 minutes and full E2E runs under 20 as the suite grew, via job parallelization, change-scoped runs from the Nx graph, and flakiness control.',
            'Built a rich-text legal document editor from scratch on ProseMirror.',
            'Aligned engineering, product, and C-level stakeholders on scope and feasibility without formal authority.',
        ],
    },
    {
        title: 'Comtrade',
        startDate: 'Dec 2019',
        endDate: 'Mar 2021',
        role: 'Lead Engineer',
        technologies: ['React', 'Nest.js', 'TypeORM', 'Kafka', 'GitLab CI'],
        responsibilities: [
            'Refactored a Nest.js + TypeORM backend to support multitenancy and introduced event sourcing with Kafka.',
            'Set up build environments and ESLint/TypeScript standards for new projects, raised integration test coverage, and hosted React best-practices workshops for the engineering team.',
        ],
    },
    {
        title: 'Evomecs GmbH',
        startDate: 'Jan 2019',
        endDate: 'Oct 2019',
        role: 'Software Engineer',
        technologies: ['React', 'Relay', '.NET Core', 'GraphQL'],
        responsibilities: [
            'Consolidated Webpack/Rollup build systems; shipped React/Relay frontend and .NET GraphQL backend features.',
        ],
    },
    {
        title: 'Social Explorer Inc.',
        startDate: 'Mar 2016',
        endDate: 'Jan 2019',
        role: 'Software Engineer',
        technologies: ['React', 'WebGL', 'Ruby on Rails', 'JavaScript'],
        responsibilities: [
            'Built React/WebGL features and maintained the company fork of mapbox-gl-js; wrote a bootstrapping script that saved 4–6 developer hours per new hire.',
        ],
    },
    {
        title: 'GlobalGPS BH',
        startDate: 'Apr 2015',
        endDate: 'Mar 2016',
        role: 'Software Engineer',
        technologies: ['Java', 'OSGi', 'Android'],
        responsibilities: [
            'Developed OSGi Java API endpoints and bootstrapped the company Android application.',
        ],
    },
];

export const projects: Project[] = [
    {
        title: 'Viatrix',
        link: 'https://viatrix.njanjo.com',
        description: 'AI patent-intelligence platform for patent counsel: natural-language search, AI risk/infringement assessment, loss-of-exclusivity analysis, and due-diligence report generation. Built solo: frontend, backend, LLM/retrieval layer, auth.',
    },
    {
        title: 'AlgoViz',
        link: 'https://algoviz.njanjo.com',
        description: 'Interactive teaching tool visualizing pathfinding and graph-search algorithms (Dijkstra, A*, greedy best-first, BFS) with a live frontier view across nine guided lessons plus a sandbox.',
    },
];

export const education: Education[] = [
    {
        title: 'Masters, Telecommunications',
        startDate: '2013',
        endDate: '2015',
        responsibilities: ['Faculty of Electrical Engineering, Sarajevo — thesis: NFC attendance system (Android)'],
    },
    {
        title: 'Bachelors, Telecommunications',
        startDate: '2010',
        endDate: '2013',
        responsibilities: ['Faculty of Electrical Engineering, Sarajevo — thesis: reconfigurable active RC filter'],
    },
];

export const interests = 'A good portion of my free time goes to physical activities. I also enjoy reading books on self-development and upgrading my leadership skills. I am a solid cook and work on that skill whenever I can — I love cooking all types of food and even took a cooking course. Two dogs and two cats keep my schedule relatively busy and active.';

export const languages: { name: string; level: string }[] = [
    { name: 'Bosnian', level: 'Native' },
    { name: 'English', level: 'Proficient (C1)' },
    { name: 'German', level: 'Basic (A2)' },
];
