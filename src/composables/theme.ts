import { computed } from 'vue'
import { isDark } from './dark'

export function useTheme() {
  const theme = computed(() => isDark.value ? 'night' : 'winter')
  return { theme }
}
