import Pages from 'vite-plugin-pages'

export const configPagesPlugin = () => {
  const pagesPlugin = Pages({
    dirs: [
      { dir: 'src/pages', baseRoute: '' },
    ],
    exclude: ['**/components/*.vue'],
  })
  return pagesPlugin
}
