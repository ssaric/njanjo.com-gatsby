module.exports = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'Sanjin Šarić personal website', // Navigation and Site Title
    titleAlt: 'Njanjo.com site', // Title for JSONLD
    description: 'Personal website for fullstack engineer Sanjin Šarić',
    headline: 'Business info', // Headline for schema.org JSONLD
    url: 'https://www.njanjo.com', // Domain of your site. No trailing slash!
    siteLanguage: 'en', // Language Tag on <html> element
    logo: '/logos/logo-1024.png', // Used for SEO

    // JSONLD / Manifest
    favicon: 'src/images/logo.svg', // Used for manifest favicon generation
    shortName: 'Njanjo', // shortname for manifest. MUST be shorter than 12 characters
    author: 'njanjo', // Author for schemaORGJSONLD
    themeColor: '#3D63AE',
    backgroundColor: '#EBEDF2',
    defaultBanner: 'src/images/profile.jpg',

    skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
