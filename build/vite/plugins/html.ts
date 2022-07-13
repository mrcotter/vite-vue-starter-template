import { createHtmlPlugin } from 'vite-plugin-html'

export const configHtmlPlugin = (isBuild: boolean) => {
  const htmlPlugin = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: process.env.VITE_APP_TITLE,
      },
    },
  })
  return htmlPlugin
}
