import { defineConfig, mergeConfig } from 'vitest/config'
import path from 'path'
import viteConfig from './vite.config'

export default defineConfig(configEnv => mergeConfig(
  viteConfig(configEnv),
  defineConfig({
    test: {
      include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"]
    },
    resolve: {
      alias: {
        '@/*': path.resolve(__dirname,'./*'),
        '@tests': path.resolve(__dirname,'./tests'),
        '@pages': path.resolve(__dirname,'./src/pages'),
        '@styles': path.resolve(__dirname,'./src/styles'),
        '@functions': path.resolve(__dirname,'./src/functions'),
        '@components': path.resolve(__dirname,'./src/components'),
        '@hooks': path.resolve(__dirname,'./src/hooks'),
      },
    }
  })
))
