import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  },
  // build: {
  //   assetsInlineLimit: 0,
  //   rollupOptions: {
  //     input: 'src/main.js',
  //     output: {
  //       dir: 'dist',
  //       entryFileNames: '[name].[hash].js',
  //       assetFileNames: '[name].[hash][extname]',
  //     },
  //   },
  // },
});
