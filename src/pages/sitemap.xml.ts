import { projects } from '../data/content';

export function GET() {
  const paths = [
    '/',
    '/experience/',
    '/roadmap/',
    ...projects.map((project) => '/projects/' + project.slug + '/')
  ];
  const urls = paths.map((path) => '<url><loc>https://omaroid.github.io' + path + '</loc></url>').join('');
  return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>', {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
