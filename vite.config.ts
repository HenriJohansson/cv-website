import { fileURLToPath, URL } from "url";
import { ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// Old test config
/*
test: {
      environment: 'jsdom',
      setupFiles: './tests/setup'
    },
*/
const hash = Math.floor(Math.random() * 90000) + 10000;
export default defineConfig(({ command, mode, isSsrBuild, isPreview }: ConfigEnv) => {
  return {
    plugins: [react()],
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          entryFileNames: `[name]` + hash + `.js`,
          chunkFileNames: `[name]` + hash + `.js`,
          assetFileNames: `[name]` + hash + `.[ext]`
        }
      }
    },
    base: '/cv-website/',
    resolve: {
      alias: {
        '@*': fileURLToPath(new URL('./src/*', import.meta.url)),
        '@tests': fileURLToPath(new URL('./tests', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@functions': fileURLToPath(new URL('./src/functions', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
        '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      },
    }
  }
});
