/// <reference types="vitest" />
import path from 'path'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugins'

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
