import { fileURLToPath, URL } from "url";
import { ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }: ConfigEnv) => {
  return {
    plugins: [react()],
  build: {
    assetsDir: 'assets'
  },
  base: '/',
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
  }
});
