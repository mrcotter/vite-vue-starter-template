import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export function configComponentsPlugin() {
  const componentsPlugin = Components({
    dts: true,
    resolvers: [
      IconsResolver(),
    ],
  })
  return componentsPlugin
}
