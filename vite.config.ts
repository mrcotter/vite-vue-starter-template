/// <reference types="vitest" />

import path from 'path'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'

import { createVitePlugins } from './build/vite/plugins'
import { OUTPUT_DIR } from './build/constant'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  loadEnv(mode, process.cwd())

  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },

    build: {
      target: 'es2019',
      outDir: OUTPUT_DIR,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
      // Turning off gzip-compressed size reporting can slightly reduce packaging time
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1200,
    },

    // The vite plugins used by the project, which are separately extracted and managed
    plugins: createVitePlugins(
      isBuild,
    ),

    optimizeDeps: {
      exclude: ['vue-demi'],
    },

    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
    },

    preview: {
      port: 5001,
    },

    // https://github.com/vitest-dev/vitest
    test: {
      environment: 'jsdom',
    },
  }
}
