// Generates public/cv.pdf from src/cv.ts. Run: yarn cv
// Designed layout matching the original Canva CV and the site palette: dark header with photo,
// timeline with company logos, section icons. Text stays selectable (checked with pdftotext).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import puppeteer from 'puppeteer-core';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faGraduationCap, faLanguage, faStar, faGlobe, faEnvelope, faLocationDot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { contact, summary, skills, experience, education, languages, interests, quote } from '../src/cv';

const OUT_DIR = 'public';
const OUT_PDF = `${OUT_DIR}/cv.pdf`;
const CHROMIUM = process.env.CHROMIUM_PATH ?? '/usr/bin/chromium';

const LOGOS: Record<string, string> = {
    'Prezi': 'prezi.png',
    'Journee Technologies GmbH': 'journee.png',
    'Philipa Legal Tech': 'philipa.png',
    'Comtrade': 'ct_logo.png',
    'Evomecs GmbH': 'evomecs_logo.png',
    'Social Explorer Inc.': 'socialexplorer_logo.png',
    'GlobalGPS BH': 'globalgps_logo.png',
};

const esc = (s: string): string =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const stripUrl = (url: string): string =>
    decodeURIComponent(url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''));

const dataUri = (file: string): string => {
    const ext = file.split('.').pop();
    const mime = ext === 'svg' ? 'image/svg+xml' : ext === 'jpg' ? 'image/jpeg' : 'image/png';
    return `data:${mime};base64,${readFileSync(`src/images/${file}`).toString('base64')}`;
};

const icon = (def: IconDefinition, cls = ''): string => {
    const [w, h, , , path] = def.icon;
    const d = Array.isArray(path) ? path.join(' ') : path;
    return `<svg class="icon ${cls}" viewBox="0 0 ${w} ${h}" fill="currentColor"><path d="${d}"/></svg>`;
};

const sectionHead = (def: IconDefinition, title: string): string =>
    `<h2 class="section"><span class="section-icon">${icon(def)}</span>${esc(title)}</h2>`;

const timelineItem = (dates: string, body: string): string =>
    `<div class="tl-item"><div class="tl-dates">${dates}</div><div class="tl-dot"></div><div class="tl-body">${body}</div></div>`;

const [firstName, ...rest] = contact.name.split(' ');

const siteLogo = `data:image/svg+xml;base64,${Buffer.from(
    readFileSync('src/images/logo.svg', 'utf8').replace('fill="white"', 'fill="#7C7E81"'),
).toString('base64')}`;

const contactItems = [
    [faGlobe, `<a href="https://${contact.website}/about">${esc(contact.website)}/about</a>`],
    [faEnvelope, `<a href="mailto:${contact.email}">${esc(contact.email)}</a>`],
    [faLinkedin, `<a href="${contact.linkedin}">${esc(stripUrl(contact.linkedin))}</a>`],
    [faGithub, `<a href="${contact.github}">${esc(stripUrl(contact.github))}</a>`],
    [faLocationDot, esc(contact.location)],
] as [IconDefinition, string][];

const experienceHtml = experience.map(e => timelineItem(
    `${esc(e.endDate)}<br>${esc(e.startDate)}`,
    `<div class="job-head">
        <img class="logo" src="${dataUri(LOGOS[e.title])}" alt="">
        <div><h3>${esc(e.title)}</h3><div class="role">${esc(e.role)}</div></div>
     </div>
     <p class="tech">Technologies: <span>${esc(e.technologies.join(', '))}</span></p>
     <ul>${e.responsibilities.map(r => `<li>${esc(r)}</li>`).join('')}</ul>`,
)).join('');

const educationHtml = education.map(e => timelineItem(
    `${esc(e.endDate)}<br>${esc(e.startDate)}`,
    `<h3>${esc(e.title)}</h3><div class="edu-sub">${esc(e.responsibilities.join('; '))}</div>`,
)).join('');

const skillsHtml = Object.entries(skills)
    .map(([g, items]) => `<div class="skill-row"><span class="skill-label">${esc(g)}</span><span>${esc(items.join(', '))}</span></div>`)
    .join('');

const languagesHtml = languages
    .map(l => `<div class="skill-row"><span class="skill-label">${esc(l.name)}</span><span>${esc(l.level)}</span></div>`)
    .join('');

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(contact.name)} — CV</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<style>
    :root {
        --primary: #148ef5; --primary-light: #89c4ff;
        --n50: #E9EBF0; --n100: #C5C7CB; --n200: #A0A2A6; --n300: #7C7E81; --n400: #5F6163;
        --n500: #424445; --n600: #242627; --n700: #070909;
        --tl-left: 26mm;
    }
    @page { size: A4; margin: 11mm 0 9mm; }
    @page :first { margin: 0 0 9mm; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body { font-family: 'Source Sans 3', 'Source Sans Pro', 'Liberation Sans', Arial, sans-serif; font-size: 8.8pt; line-height: 1.35; color: var(--n700); background: #fff; }
    a { color: inherit; text-decoration: none; }
    h1, h2, h3, p, ul { margin: 0; }
    .icon { width: 1em; height: 1em; display: inline-block; vertical-align: -0.12em; }

    /* Header */
    .header { position: relative; background: var(--n600); color: var(--n50); padding: 7mm 14mm 4mm; display: flex; gap: 8mm; }
    .photo { width: 36mm; height: 36mm; object-fit: cover; object-position: top; border-radius: 2mm; flex-shrink: 0; }
    .header-text { flex: 1; }
    .name { font-size: 26pt; font-weight: 300; letter-spacing: 0.06em; text-transform: uppercase; line-height: 1.05; }
    .name strong { font-weight: 700; }
    .headline { color: var(--primary); font-size: 11.5pt; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 1.5mm; }
    .summary-title { font-size: 9pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--n100); margin: 4mm 0 1.5mm; }
    .summary p { font-size: 8pt; line-height: 1.36; color: var(--n50); margin-bottom: 1.5mm; }
    .summary p:first-child { font-weight: 600; }
    .contact { background: var(--n600); color: var(--n50); padding: 0 14mm 5mm; display: grid; grid-template-columns: 1fr 1.25fr 1.55fr; gap: 1.5mm 5mm; font-size: 8.6pt; font-weight: 600; }
    .contact .icon { color: var(--primary); width: 1.25em; height: 1.25em; margin-right: 2mm; }

    /* Body */
    .body { padding: 4mm 12mm 8mm; }
    .section { display: flex; align-items: center; gap: 3mm; font-size: 12pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; margin: 4.2mm 0 2.6mm; break-after: avoid; break-inside: avoid; }
    .section-icon { width: 8mm; height: 8mm; background: var(--n600); color: #fff; border-radius: 1.5mm; display: flex; align-items: center; justify-content: center; font-size: 11pt; }

    .timeline { --tl-pad: 6mm; --dot: 4mm; position: relative; margin-left: var(--tl-left); border-left: 2px solid var(--n600); padding-left: var(--tl-pad); }
    .tl-item { position: relative; margin-bottom: 2.8mm; break-inside: avoid; }
    .tl-dates { position: absolute; right: calc(100% + 12mm); top: 0.6mm; width: 22mm; text-align: right; font-weight: 700; font-size: 9pt; line-height: 1.3; color: var(--n600); }
    .tl-dot { position: absolute; left: calc(-1 * var(--tl-pad) - 1px - var(--dot) / 2); top: 2.7mm; width: var(--dot); height: var(--dot); border-radius: 50%; background: var(--n600); border: 2px solid #fff; box-shadow: 0 0 0 1.5px var(--n600); }
    .job-head { display: flex; align-items: center; gap: 3mm; margin-bottom: 1mm; break-after: avoid; }
    .logo { width: 7mm; height: 7mm; object-fit: contain; border-radius: 1.5mm; flex-shrink: 0; }
    h3 { font-size: 12pt; font-weight: 700; line-height: 1.15; }
    .role { font-weight: 700; font-size: 9.5pt; color: var(--n500); }
    .tech { font-size: 8.8pt; color: var(--primary); text-decoration: underline; text-decoration-color: var(--primary-light); margin: 0.5mm 0 1.2mm 10mm; }
    ul { margin-left: 10mm; padding-left: 4mm; }
    li { margin-bottom: 0.35mm; color: var(--n500); break-inside: avoid; }
    li::marker { color: var(--n600); }
    .desc { color: var(--n500); }
    .edu-sub { font-size: 8.8pt; font-weight: 600; text-transform: uppercase; color: var(--n500); letter-spacing: 0.02em; }

    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 10mm; break-inside: avoid; }
    .skills { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 6mm; break-inside: avoid; }
    .skills .skill-row { grid-template-columns: 1fr; gap: 0; margin-bottom: 1.3mm; align-content: start; }
    .skills { align-items: start; row-gap: 2mm; grid-auto-rows: 1fr; }
    .three-col { display: grid; grid-template-columns: 2fr 0.7fr 1.4fr; gap: 0 6mm; break-inside: avoid; }
    .three-col .edu-sub { text-transform: none; font-weight: 400; letter-spacing: 0; }
    .three-col .section { margin-top: 2.5mm; }
    .three-col .interests, .three-col .edu-sub, .three-col .skill-row { font-size: 8.2pt; line-height: 1.32; }
    .three-col .timeline { --tl-pad: 4mm; margin-left: 12mm; }
    .three-col .tl-dot { top: 0.1mm; }
    .three-col .tl-dates { width: 9mm; right: calc(100% + 9mm); top: -2mm; }
    .three-col h3 { font-size: 10.5pt; }
    .three-col .skill-row { grid-template-columns: 16mm 1fr; }
    .skill-row { display: grid; grid-template-columns: 26mm 1fr; gap: 3mm; margin-bottom: 1mm; color: var(--n500); }
    .skill-label { font-weight: 700; color: var(--n700); }
    .interests { color: var(--n500); }

    .quote { margin-top: 2mm; padding-left: 2.5mm; border-left: 2px solid var(--primary); font-style: italic; font-size: 8pt; color: var(--n200); }
    .site-logo { position: absolute; top: 6mm; right: 12mm; width: 9mm; height: 9mm; }
</style></head>
<body>
    <header class="header">
        <img class="photo" src="${dataUri('profile.jpg')}" alt="">
        <div class="header-text">
            <h1 class="name">${esc(firstName)} <strong>${esc(rest.join(' '))}</strong></h1>
            <div class="headline">${esc(contact.headline)}</div>
            <div class="summary-title">Career summary</div>
            <div class="summary">${summary.map(p => `<p>${esc(p)}</p>`).join('')}</div>
            <div class="quote">“${esc(quote)}”</div>
        </div>
        <img class="site-logo" src="${siteLogo}" alt="">
    </header>
    <div class="contact">
        ${contactItems.map(([def, v]) => `<span>${icon(def)}${v}</span>`).join('')}
    </div>

    <main class="body">
        ${sectionHead(faBriefcase, 'Work experience')}
        <div class="timeline">${experienceHtml}</div>

        ${sectionHead(faLayerGroup, 'Skills')}
        <div class="skills">${skillsHtml}</div>

        <div class="three-col">
            <div>
                ${sectionHead(faGraduationCap, 'Education')}
                <div class="timeline">${educationHtml}</div>
            </div>
            <div>
                ${sectionHead(faLanguage, 'Languages')}
                ${languagesHtml}
            </div>
            <div>
                ${sectionHead(faStar, 'Interests')}
                <p class="interests">${esc(interests)}</p>
            </div>
        </div>

    </main>
</body></html>`;

const main = async (): Promise<void> => {
    mkdirSync(OUT_DIR, { recursive: true });
    if (process.env.CV_HTML_OUT) writeFileSync(process.env.CV_HTML_OUT, html); // debug: inspect layout in a browser
    const browser = await puppeteer.launch({ executablePath: CHROMIUM, headless: true, args: ['--no-sandbox'] });
    try {
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        await page.pdf({ path: OUT_PDF, format: 'A4', preferCSSPageSize: true, printBackground: true });
    } finally {
        await browser.close();
    }

    // Text must stay selectable/extractable (not an image export).
    const text = execFileSync('pdftotext', ['-layout', OUT_PDF, '-']).toString().replace(/\s+/g, ' ').toLowerCase();
    const probes = [summary[0].slice(0, 60), 'Work experience', 'Skills', contact.email];
    const missing = probes.filter(p => !text.includes(p.toLowerCase()));
    if (missing.length > 0) throw new Error(`Text extraction check failed, missing: ${missing.join(' | ')}`);
    const pages = (execFileSync('pdfinfo', [OUT_PDF]).toString().match(/Pages:\s+(\d+)/) ?? [])[1];
    console.log(`Wrote ${OUT_PDF} (${pages} pages). Text extraction OK.`);
};

main().catch(err => { console.error(err); process.exit(1); });
