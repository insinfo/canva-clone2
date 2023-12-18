/// <reference types='vitest' />
import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import EnvironmentPlugin from 'vite-plugin-environment';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/editor',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },
  build: {
    sourcemap: true,
  },

  plugins: [
    ViteEjsPlugin(),
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
    EnvironmentPlugin('all'),
    sentryVitePlugin({
      org: 'liquid-editor',
      project: 'liquid-editor-demo',
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
});
