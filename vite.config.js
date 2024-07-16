import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://timbu-get-single-product.reavdev.workers.dev',
  //       changeOrigin: true,
  //       rewrite: (path) =>
  //         path.replace(
  //           /^\/api/,
  //           '/c70feba6c89e4365a289848687cd4f48?organization_id=afcdbe3fe39c4c3d921c1e2edd46b0a9&Appid=QH3R2FP5H8EW8BD&Apikey=7f8c864f9e4a4b2a8dc3a0f8e8656f6820240712173551219779'
  //         ),
  //     },
  //   },
  // },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.timbu.cloud', // The base URL of the API
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '/products'), // The endpoint you want to call
  //     },
  //   },
  // },
});
