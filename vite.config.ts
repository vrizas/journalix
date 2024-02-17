import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@domain': '/src/domain',
      '@data': '/src/data',
      '@presentation': '/src/presentation',
      '@assets': '/src/assets',
      '@layouts': '/src/layouts',
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['/src/__test__/setup/setup.ts'],
  },
})
