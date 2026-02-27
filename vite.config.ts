import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['logo.svg'],
          manifest: {
            name: 'Indoor and Outdoor',
            short_name: 'Indoor & Outdoor',
            description: "Lambert's Bay's trusted local store for fishing gear, camping equipment, braai essentials.",
            theme_color: '#132e5b',
            background_color: '#f8f7f6',
            display: 'standalone',
            icons: [
              {
                src: '/logo.svg',
                sizes: '192x192',
                type: 'image/svg+xml',
                purpose: 'any'
              },
              {
                src: '/logo.svg',
                sizes: '512x512',
                type: 'image/svg+xml',
                purpose: 'any'
              },
              {
                src: '/logo.svg',
                sizes: '144x144',
                type: 'image/svg+xml',
                purpose: 'any'
              }
            ]
          },
          devOptions: {
            enabled: true
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
