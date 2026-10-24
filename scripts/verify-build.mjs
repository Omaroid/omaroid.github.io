import { readFileSync, existsSync } from 'node:fs';
import { strict as assert } from 'node:assert';

const root = 'dist/';
const paths = [
  'index.html', 'experience/index.html', 'roadmap/index.html',
  '404.html', 'sitemap.xml', 'favicon.svg',
  'projects/dossierpro/index.html',
  'projects/retail-churn-copilot/index.html',
  'projects/mission-radar/index.html',
  'projects/sa-os/index.html',
  'projects/lakehouse-signal/index.html',
  'projects/pokevalue/index.html',
  'projects/pb-farmer/index.html', 'projects/iot-fireman/index.html',
  'projects/cv-parser-internship/index.html', 'projects/covid-19-data-api/index.html',
  'projects/world-inequality-visuals/index.html', 'projects/brent-oil-forecast/index.html',
  'projects/email-classifier/index.html', 'projects/salesforce-documents-retriever/index.html'
];

for (const path of paths) {
  assert(existsSync(root + path), 'Missing static output: ' + path);
  if (path.endsWith('.html')) {
    const html = readFileSync(root + path, 'utf8');
    assert(html.includes('<html') && html.includes('rel="canonical"'), 'Missing HTML or canonical URL: ' + path);
  }
}

const home = readFileSync(root + 'index.html', 'utf8');
assert(home.includes('La data complexe.') && home.includes('Des solutions utiles'), 'French hero not generated');
assert(home.match(/class="editorial-project(?: archive-project)?"/g)?.length === 14, 'All 14 documented project cards expected');
assert(home.includes('PB Farmer') && home.includes('IoT Fireman'), 'IoT projects are missing from the portfolio');
assert(home.includes('Demander l’accès') && home.includes('Voir le dépôt'), 'Repository access actions are missing');
assert(!home.includes('NEXTAUTH_SECRET') && !home.includes('OPENAI_API_KEY'), 'Sensitive variable label in generated output');

const sitemap = readFileSync(root + 'sitemap.xml', 'utf8');
assert(sitemap.includes('/projects/dossierpro/'), 'Case studies missing from sitemap');
assert(sitemap.includes('/roadmap/'), 'Roadmap missing from sitemap');

const bilingualPaths = [
  'en/index.html', 'en/experience/index.html', 'en/roadmap/index.html',
  'en/projects/dossierpro/index.html', 'en/projects/retail-churn-copilot/index.html',
  'en/projects/mission-radar/index.html', 'en/projects/sa-os/index.html',
  'en/projects/lakehouse-signal/index.html', 'en/projects/pokevalue/index.html',
  'en/projects/pb-farmer/index.html', 'en/projects/iot-fireman/index.html',
  'en/projects/cv-parser-internship/index.html', 'en/projects/covid-19-data-api/index.html',
  'en/projects/world-inequality-visuals/index.html', 'en/projects/brent-oil-forecast/index.html',
  'en/projects/email-classifier/index.html', 'en/projects/salesforce-documents-retriever/index.html'
];
for (const path of bilingualPaths) {
  assert(existsSync(root + path), 'Missing English route: ' + path);
  const page = readFileSync(root + path, 'utf8');
  assert(page.includes('lang="en"'), 'Incorrect English HTML lang: ' + path);
  assert(page.includes('hreflang="fr"') && page.includes('hreflang="en"'), 'Missing language alternates: ' + path);
}
const frenchHome = readFileSync(root + 'index.html', 'utf8');
const englishHome = readFileSync(root + 'en/index.html', 'utf8');
assert(frenchHome.includes('lang="fr"'), 'Home must be primarily French');
assert(frenchHome.includes('Tech Lead Data'), 'French hero missing current role');
assert(englishHome.includes('Data') && englishHome.includes('Tech Lead'), 'English hero missing current role');
assert(frenchHome.includes('projets'), 'French homepage not translated');
assert(frenchHome.includes('href="/en/"'), 'FR -> EN switch missing');
assert(englishHome.includes('href="/"'), 'EN -> FR switch missing');
const frenchExperience = readFileSync(root + 'experience/index.html', 'utf8');
const englishExperience = readFileSync(root + 'en/experience/index.html', 'utf8');
for (const client of ['ENGIE', 'Afflelou', 'iQera', 'AXA', 'Natixis', 'Ingeniance', 'Edifixio']) {
  assert(frenchExperience.toLowerCase().includes(client.toLowerCase()), 'FR experience missing: ' + client);
  assert(englishExperience.toLowerCase().includes(client.toLowerCase()), 'EN experience missing: ' + client);
}
assert(frenchExperience.includes('Tech Lead Data') && frenchExperience.includes('Cloud Data Engineer'), 'Experience roles missing');
assert(englishExperience.includes('Data Tech Lead') && englishExperience.includes('Cloud Data Engineer'), 'Translated experience roles missing');
assert(!englishHome.includes('I am a Forward Deployed Engineer'), 'Cannot misrepresent target role');
assert((frenchExperience.match(/class="timeline-item"/g) || []).length === 8, 'Eight dated career roles expected');
assert((englishExperience.match(/class="timeline-item"/g) || []).length === 8, 'Eight English career entries expected');
assert(sitemap.includes('/en/roadmap/') && sitemap.includes('/en/projects/dossierpro/'), 'English URL missing from sitemap');


const frenchCase = readFileSync(root + 'projects/dossierpro/index.html', 'utf8');
const englishCase = readFileSync(root + 'en/projects/dossierpro/index.html', 'utf8');
assert(frenchCase.includes('recrutement') && frenchCase.includes('Étude de cas'), 'French case-study text missing');
assert(englishCase.includes('recruitment') && englishCase.includes('Engineering case study'), 'English case-study text missing');
assert(frenchCase.includes('href="/en/projects/dossierpro/"'), 'Case-study language toggle must retain slug');
assert(englishCase.includes('href="/projects/dossierpro/"'), 'English case-study toggle must retain slug');
const frenchCv = readFileSync(root + 'projects/cv-parser-internship/index.html', 'utf8');
const englishCv = readFileSync(root + 'en/projects/cv-parser-internship/index.html', 'utf8');
assert(frenchCv.includes('Projet de stage') && frenchCv.includes('février–août 2020'), 'CV parsing internship context missing in French');
assert(englishCv.includes('Internship project') && englishCv.includes('February–August 2020'), 'CV parsing internship context missing in English');
assert(frenchCv.includes('mailto:omarlaraqui59@gmail.com'), 'Private repository access email missing');
const frenchFarmer = readFileSync(root + 'projects/pb-farmer/index.html', 'utf8');
const englishFarmer = readFileSync(root + 'en/projects/pb-farmer/index.html', 'utf8');
assert(frenchFarmer.includes('Raspberry Pi') && frenchFarmer.includes('Voir le dépôt public'), 'French PB Farmer README content or public link missing');
assert(englishFarmer.includes('Azure') && englishFarmer.includes('View public repository'), 'English PB Farmer README content or public link missing');
assert((frenchExperience.match(/class="timeline-client(?: visually-hidden)?">AXA/g) || []).length === 2, 'Preserve AXA Tech Lead and Cloud Engineer as separate roles');
assert(existsSync(root + 'en/404/index.html') || existsSync(root + 'en/404.html'), 'English not-found route missing');



// Verify real built routes and local assets, not just string labels in markup.
// A page may compile successfully while linking to a nonexistent static route.
import { readdirSync, statSync } from 'node:fs';
import { join, posix } from 'node:path';

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const full = join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(full) : entry.name.endsWith('.html') ? [full] : [];
  });
}

const allHtml = htmlFiles(root);
for (const file of allHtml) {
  const html = readFileSync(file, 'utf8');
  const links = [...html.matchAll(/\bhref="([^"]+)"/g)].map(match => match[1]);
  for (const href of links) {
    if (!href.startsWith('/')) continue;
    const url = new URL(href, 'https://omaroid.github.io');
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const target = relative === ''
      ? 'index.html'
      : relative.endsWith('/') ? relative + 'index.html' : relative;
    const resolved = join(root, target);
    assert(existsSync(resolved), 'Broken internal link in ' + file + ': ' + href);
    if (url.hash) {
      const destination = readFileSync(resolved, 'utf8');
      const anchor = decodeURIComponent(url.hash.slice(1));
      if (target.endsWith('.html')) {
        assert(destination.includes('id="' + anchor + '"'), 'Broken internal fragment in ' + file + ': ' + href);
      }
    }
  }
}

for (const file of allHtml) {
  const html = readFileSync(file, 'utf8');
  assert(html.includes('http-equiv="Content-Security-Policy"'), 'CSP missing from ' + file);
  assert(html.includes("default-src &#39;none&#39;") || html.includes("default-src 'none'") || html.includes("default-src &apos;none&apos;"), 'Expected deny-by-default CSP in ' + file);
  assert(!html.includes("'unsafe-inline'") && !html.includes('unsafe-eval'), 'Unsafe CSP escape hatch in ' + file);
  assert(!/\sstyle="[^"]*"/.test(html), 'Inline style blocked by CSP in ' + file);
  const matches = [...html.matchAll(/<script\\b([^>]*)>/gi)];
  for (const [,attributes] of matches) {
    if (attributes.includes('src=')) {
      assert(!/src="https?:\/\//.test(attributes), 'Unexpected third-party script in ' + file);
    }
  }
}

const generatedHome = readFileSync(root + 'index.html', 'utf8');
assert(/href="\/_astro\/[^"]+\.css"/.test(generatedHome), 'Built CSS is not linked on the homepage');
assert(htmlFiles(root).length >= 20, 'Expected complete FR / EN static pages');
assert(existsSync(root + '.nojekyll'), 'Missing .nojekyll for safe GitHub Pages publishing');


// Technology brand images are bundled at build time, never fetched from remote CDNs.
const techLogos = [
  'databricks', 'apachespark', 'python', 'typescript', 'nextdotjs',
  'postgresql', 'redis', 'react', 'github', 'docker',
  'terraform', 'apacheairflow', 'vercel',
  'supabase', 'gitlab', 'apachehadoop', 'javascript', 'nodedotjs', 'scala',
  'mlflow', 'scikitlearn', 'kubernetes', 'pytorch'
];
for (const logo of techLogos) {
  const file = root + 'logos/technology/' + logo + '.svg';
  assert(existsSync(file), 'Missing locally hosted technology logo: ' + logo);
  const svg = readFileSync(file, 'utf8');
  assert(svg.includes('<svg') && !/<script|onload=|onerror=|<foreignObject/i.test(svg), 'Unsafe SVG asset: ' + logo);
}
for (const file of ['index.html', 'en/index.html', 'experience/index.html', 'en/experience/index.html']) {
  const html = readFileSync(root + file, 'utf8');
  assert(html.includes('/logos/technology/databricks.svg'), 'Technology logo missing on ' + file);
  assert(!/src="https?:\/\//i.test(html), 'Unexpected external image in ' + file);
}


// Company identity marks are self-hosted and do not contact a logo CDN.
const clientLogos = ['engie.png','afflelou.png','iqera.png','axa.png','natixis.svg','ingeniance.png','edifixio.png'];
for (const logo of clientLogos) {
  const file = root + 'logos/clients/' + logo;
  assert(existsSync(file), 'Missing locally hosted client logo: ' + logo);
  if (logo.endsWith('.svg')) {
    const svg = readFileSync(file, 'utf8');
    assert(svg.includes('<svg') && !/<script|onload=|onerror=|<foreignObject/i.test(svg), 'Unsafe client SVG: ' + logo);
  }
}
for (const file of ['index.html','en/index.html','experience/index.html','en/experience/index.html']) {
  const html = readFileSync(root+file,'utf8');
  assert(html.includes('premium-surface'), 'Premium design missing from ' + file);
  assert(html.includes('/logos/clients/engie.png'), 'ENGIE logo missing from ' + file);
  assert(html.includes('/logos/clients/natixis.svg'), 'Natixis logo missing from ' + file);
  assert(html.includes('/logos/clients/edifixio.png'), 'Edifixio logo missing from ' + file);
  assert(!html.includes('img.anylogo.dev'), 'Third-party logo CDN remains in ' + file);
  assert(html.includes("img-src &#39;self&#39; data:") || html.includes("img-src 'self' data:"), 'Self-hosted image policy missing from ' + file);
}
for (const logo of clientLogos) {
  assert(frenchHome.includes('/logos/clients/' + logo), 'Company logo missing from French homepage: ' + logo);
  assert(englishHome.includes('/logos/clients/' + logo), 'Company logo missing from English homepage: ' + logo);
}
// Project favicons are copied from actual project repositories where available.
const projectIcons = {
  'dossierpro': 'png',
  'retail-churn-copilot': 'png',
  'mission-radar': 'svg',
  'pokevalue': 'svg',
  'sa-os': 'svg',
  'lakehouse-signal': 'png'
};
for (const [slug, extension] of Object.entries(projectIcons)) {
  const file = root + 'project-icons/' + slug + '.' + extension;
  assert(existsSync(file), 'Missing bundled project favicon: ' + file);
  const data = readFileSync(file);
  if (extension === 'png') assert(data.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])), 'PNG signature mismatch: ' + slug);
  else assert(data.toString('utf8').includes('<svg') && !/<script|onload\s*=|onerror\s*=|<foreignObject|javascript:/i.test(data.toString('utf8')), 'Unsafe project SVG: ' + slug);
  assert(frenchHome.includes('/project-icons/' + slug + '.' + extension), 'Project favicon missing on French homepage: ' + slug);
  assert(englishHome.includes('/project-icons/' + slug + '.' + extension), 'Project favicon missing on English homepage: ' + slug);
  const detail = readFileSync(root + 'projects/' + slug + '/index.html', 'utf8');
  assert(detail.includes('/project-icons/' + slug + '.' + extension), 'Project favicon missing from case study: ' + slug);
}
for (const file of ['index.html','en/index.html','experience/index.html','en/experience/index.html']) {
  assert(!/Forward Deployed|vers le FDE|toward FDE/i.test(readFileSync(root+file,'utf8')), 'Over-prominent career aspiration in ' + file);
}
for (const file of ['index.html','en/index.html']) {
  const html = readFileSync(root+file,'utf8');
  assert(html.includes('project-icon-image'), 'Favicon-led project identity missing in ' + file);
  assert(html.includes('brand-strip-list'), 'Client showcase missing from ' + file);
}

console.log('Bilingual static build verified: ' + paths.length + ' core files and 14 case studies.');
