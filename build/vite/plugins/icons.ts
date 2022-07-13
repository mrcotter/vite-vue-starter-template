import Icons from 'unplugin-icons/vite'

export const configIconsPlugin = () => {
  const iconsPlugin = Icons({
    compiler: 'vue3',
  })
  return iconsPlugin
}
