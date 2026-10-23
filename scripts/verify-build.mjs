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
assert(home.includes('Complex data.') && home.includes('Useful products'), 'Hero not generated');
assert(home.match(/class="project-card"/g)?.length === 6, 'Exactly six flagship projects expected');
assert(home.includes('data-filter="all"'), 'Filter interaction missing');
assert(!home.includes('NEXTAUTH_SECRET') && !home.includes('OPENAI_API_KEY'), 'Sensitive variable label in generated output');

const sitemap = readFileSync(root + 'sitemap.xml', 'utf8');
assert(sitemap.includes('/projects/dossierpro/'), 'Case studies missing from sitemap');
assert(sitemap.includes('/roadmap/'), 'Roadmap missing from sitemap');
console.log('Static build verified: ' + paths.length + ' core files and 6 case studies.');
