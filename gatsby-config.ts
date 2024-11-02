import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Sanjin Šarić personal website", // Navigation and Site Title
        titleAlt: "Njanjo.com site", // Title for JSONLD
        description: "Personal website for fullstack engineer Sanjin Šarić",
        headline: "Business info", // Headline for schema.org JSONLD
        siteUrl: "https://www.njanjo.com", // Domain of your site. No trailing slash!
        siteLanguage: "en", // Language Tag on <html> element
        logo: "src/images/profile.jpg", // Used for SEO
        author: "njanjo", // Author for schemaORGJSONLD
        defaultBanner: "src/images/profile.jpg",
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Source Sans Pro`,
                        file: `https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;500;600&display=swap`,
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-svgr',
            options: {
                svgo: false,
                ref: true,
            },
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                "trackingIds": ["GTM-5VHJXNBK"]
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Sanjin Šarić personal website",
                short_name: "Njanjo", // MUST be shorter than 12 characters
                start_url: "/",
                background_color: "#EBEDF2",
                theme_color: "#3D63AE",
                display: "minimal-ui",
                icon: "src/images/logo.svg", // This path is relative to the root of the site.
            },
        },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, "gatsby-plugin-postcss"]
};

export default config;
