import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'

export function configWebfontPlugin() {
  return ViteWebfontDownload([
    'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
    'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap',
    'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Serif+Display:ital@0;1&display=swap',
  ])
}
