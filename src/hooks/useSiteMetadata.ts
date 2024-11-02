// hooks/use-site-metadata.ts
import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `
    );
    return site.siteMetadata;
};