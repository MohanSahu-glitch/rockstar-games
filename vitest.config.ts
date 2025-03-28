import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '/setupTests.ts', // Ensure this path is correct
    exclude: [...configDefaults.exclude, 'dist/**'],
  },
});
