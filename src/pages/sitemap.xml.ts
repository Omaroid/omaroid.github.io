import { projects } from '../data/content';

export function GET() {
  const paths = [
    '/', '/experience/', '/roadmap/',
    ...projects.map(project => '/projects/' + project.slug + '/')
  ];
  const urls = paths.flatMap(path => [path, '/en' + path]);
  const entries = urls.map(path => {
    const isEnglish = path.startsWith('/en/');
    const originalPath = isEnglish ? path.slice(3) : path;
    const fr = 'https://omaroid.github.io' + originalPath;
    const en = 'https://omaroid.github.io/en' + originalPath;
    const loc = 'https://omaroid.github.io' + path;
    return '<url><loc>' + loc + '</loc>' +
      '<xhtml:link rel="alternate" hreflang="fr" href="' + fr + '"/>' +
      '<xhtml:link rel="alternate" hreflang="en" href="' + en + '"/>' +
      '<xhtml:link rel="alternate" hreflang="x-default" href="' + fr + '"/>' +
      '</url>';
  }).join('');
  const xml = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' +
    entries + '</urlset>';
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
