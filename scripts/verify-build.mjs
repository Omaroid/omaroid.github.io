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
  'projects/bloom-terminal/index.html',
  'projects/pokevalue/index.html'
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
assert(home.match(/class="project-card"/g)?.length === 6, 'Exactly six flagship projects expected');
assert(home.includes('data-filter="all"'), 'Filter interaction missing');
assert(!home.includes('NEXTAUTH_SECRET') && !home.includes('OPENAI_API_KEY'), 'Sensitive variable label in generated output');

const sitemap = readFileSync(root + 'sitemap.xml', 'utf8');
assert(sitemap.includes('/projects/dossierpro/'), 'Case studies missing from sitemap');
assert(sitemap.includes('/roadmap/'), 'Roadmap missing from sitemap');

const bilingualPaths = [
  'en/index.html', 'en/experience/index.html', 'en/roadmap/index.html',
  'en/projects/dossierpro/index.html', 'en/projects/retail-churn-copilot/index.html',
  'en/projects/mission-radar/index.html', 'en/projects/sa-os/index.html',
  'en/projects/bloom-terminal/index.html', 'en/projects/pokevalue/index.html'
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

console.log('Bilingual static build verified: ' + paths.length + ' core files and 6 case studies.');
