import type { PluginOption } from 'vite'
import { configVuePlugin } from './vue'
import { configJsxPlugin } from './jsx'
import { configPagesPlugin } from './pages'
import { configComponentsPlugin } from './components'
import { configHtmlPlugin } from './html'

export const createVitePlugins = (isBuild: boolean) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    configVuePlugin(),
    configJsxPlugin(),
  ]

  vitePlugins.push(configComponentsPlugin())
  vitePlugins.push(configPagesPlugin())
  vitePlugins.push(configHtmlPlugin(isBuild))

  return vitePlugins
}
