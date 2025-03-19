import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure this is correct
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // Ensure Vite knows where the entry point is
    }
  }
});
