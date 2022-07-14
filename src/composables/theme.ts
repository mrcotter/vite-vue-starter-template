import { computed } from 'vue'
import { isDark } from './dark'

export const useTheme = () => {
  const theme = computed(() => isDark.value ? 'night' : 'winter')
  return { theme }
}
