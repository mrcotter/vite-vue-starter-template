import layouts from 'vite-plugin-vue-layouts'

export function configLayoutsPlugin() {
  const layoutsPlugin = layouts({
    layoutsDirs: 'src/layouts',
  })
  return layoutsPlugin
}
