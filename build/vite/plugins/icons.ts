import Icons from 'unplugin-icons/vite'

export const configIconsPlugin = () => {
  const iconsPlugin = Icons({
    scale: 1.4,
    compiler: 'vue3',
  })
  return iconsPlugin
}
