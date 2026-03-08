import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    site: 'https://www.njanjo.com',
    integrations: [
        react(),
        tailwind({ applyBaseStyles: false }),
        sitemap(),
    ],
    vite: {
        plugins: [svgr()],
    },
});
