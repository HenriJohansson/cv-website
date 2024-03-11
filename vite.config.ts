import path from "path";
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
export default defineConfig(({ command, mode, isSsrBuild, isPreview }: ConfigEnv) => {
  return {
    plugins: [react()],
    build: {
      assetsDir: 'assets',
    },
    base: '/cv-website/',
    resolve: {
      alias: {
        '@*': path.resolve(__dirname, './src/*'),
        '@tests': path.resolve(__dirname,'./tests'),
        '@pages': path.resolve(__dirname,'./src/pages'),
        '@styles': path.resolve(__dirname,'./src/styles'),
        '@functions': path.resolve(__dirname,'./src/functions'),
        '@components': path.resolve(__dirname,'./src/components'),
        '@store': path.resolve(__dirname,'./src/store'),
        '@hooks': path.resolve(__dirname,'./src/hooks'),
      },
    }
  }
});
