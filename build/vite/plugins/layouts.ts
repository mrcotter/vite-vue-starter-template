import layouts from 'vite-plugin-vue-layouts'

export const configLayoutsPlugin = () => {
  const layoutsPlugin = layouts({
    layoutsDirs: 'src/layouts',
  })
  return layoutsPlugin
}
