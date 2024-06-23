import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import pkg from './package.json'

const EXTERNAL = []

if ('dependencies' in pkg)
  EXTERNAL.push(...Object.keys(pkg.dependencies))
if ('devDependencies' in pkg)
  EXTERNAL.push(...Object.keys(pkg.devDependencies))
if ('peerDependencies' in pkg)
  EXTERNAL.push(...Object.keys(pkg.peerDependencies))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      formats: ['es'],
      entry: './src/index.ts',
    },
    rollupOptions: {
      treeshake: {
        annotations: true,
        preset: "recommended",
        // moduleSideEffects // css -> true
      },
      output: {
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: './src',
        dir: './dist'
      },
      external: EXTERNAL
    }
  },
  resolve: {
    dedupe: ['vue'],
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
