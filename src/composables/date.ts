import dayjs from 'dayjs'
import { computed } from 'vue'

export function useDateUtil() {
  const thisYear = computed(() => dayjs().year())

  return { thisYear }
}
