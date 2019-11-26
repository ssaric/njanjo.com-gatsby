const website = require('./config/website');

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

module.exports = {
    siteMetadata: {
        siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
        pathPrefix,
        title: website.title,
        titleAlt: website.titleAlt,
        description: website.description,
        banner: website.logo,
        headline: website.headline,
        siteLanguage: website.siteLanguage,
        author: website.author,
    },
    plugins: [
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sass',
        'gatsby-plugin-eslint',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Sanjin Šarić personal website',
                short_name: 'Njanjo',
                start_url: '/',
                background_color: '#185032',
                theme_color: '#185032',
                display: 'standalone',
                icon: 'src/images/logo.svg', // This path is relative to the root of the site.
            },
        },
    ],
};
