import { cp, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const clientDir = path.join(projectRoot, 'dist', 'client');
const serverEntry = path.join(projectRoot, 'dist', 'server', 'index.js');
const outputDir = path.join(projectRoot, 'dist-netlify');
const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://rashadthehelper.netlify.app';

const routes = [
  '/',
  '/services',
  '/service-areas',
  '/services/truck-loading',
  '/services/unloading',
  '/services/heavy-lifting',
  '/services/furniture-assembly',
  '/services/rental-truck-driving',
];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const worker = (await import(pathToFileURL(serverEntry).href)).default;
const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.woff2', 'font/woff2'],
]);

const env = {
  ASSETS: {
    async fetch(request) {
      const url = new URL(request.url);
      const relativePath = decodeURIComponent(url.pathname).replace(/^\/+/, '');
      const filePath = path.join(clientDir, relativePath);
      try {
        const details = await stat(filePath);
        if (!details.isFile()) return new Response('Not found', { status: 404 });
        const body = await readFile(filePath);
        return new Response(body, { headers: { 'content-type': mimeTypes.get(path.extname(filePath)) || 'application/octet-stream' } });
      } catch {
        return new Response('Not found', { status: 404 });
      }
    },
  },
};

const executionContext = { waitUntil() {}, passThroughOnException() {} };

async function render(route, outputPath, expectedStatus = 200) {
  const response = await worker.fetch(new Request(new URL(route, origin)), env, executionContext);
  if (response.status !== expectedStatus || !response.headers.get('content-type')?.includes('text/html')) {
    throw new Error(`Could not export ${route}: received ${response.status}`);
  }
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, await response.text(), 'utf8');
}

for (const route of routes) {
  const outputPath = route === '/'
    ? path.join(outputDir, 'index.html')
    : path.join(outputDir, route.slice(1), 'index.html');
  await render(route, outputPath);
}

await render('/page-not-found', path.join(outputDir, '404.html'), 404);
console.log(`Exported ${routes.length} pages and a 404 page to dist-netlify.`);
