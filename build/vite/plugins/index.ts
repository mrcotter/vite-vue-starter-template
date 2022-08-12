import type { PluginOption } from 'vite'
import { configVuePlugin } from './vue'
import { configJsxPlugin } from './jsx'
import { configPagesPlugin } from './pages'
import { configLayoutsPlugin } from './layouts'
import { configComponentsPlugin } from './components'
import { configWebfontPlugin } from './webfont'
import { configIconsPlugin } from './icons'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createVitePlugins = (isBuild: boolean) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    configVuePlugin(),
    configJsxPlugin(),
  ]

  vitePlugins.push(configComponentsPlugin())
  vitePlugins.push(configPagesPlugin())
  vitePlugins.push(configLayoutsPlugin())
  vitePlugins.push(configWebfontPlugin())
  vitePlugins.push(configIconsPlugin())

  return vitePlugins
}
