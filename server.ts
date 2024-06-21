import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const locale = serverDistFolder.split('/').at(-1) ?? '';
  const browserDistFolder = resolve(serverDistFolder, '../../browser', locale);
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  // Note: Don't use in production.
  server.use(
    '/api/autocomplete',
    createProxyMiddleware({
      target: 'https://autocomplete.travelpayouts.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api/autocomplete': '',
      },
    }),
  );
  server.use(
    '/api/aviasales',
    createProxyMiddleware({
      target: 'https://api.travelpayouts.com',
      secure: false,
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
    }),
  );
  server.use(
    '/api/hotels',
    createProxyMiddleware({
      target: 'https://engine.hotellook.com/api/v2',
      secure: false,
      pathRewrite: {
        '^/api/hotels': '',
      },
      changeOrigin: true,
    }),
  );

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });

  // Serve static files from /browser
  server.get(
    '**',
    express.static(browserDistFolder, {
      maxAge: '1y',
      index: 'index.html',
    }),
  );

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
