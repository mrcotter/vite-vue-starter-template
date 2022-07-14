import dayjs from 'dayjs'
import { computed } from 'vue'

export const useDateUtil = () => {
  const thisYear = computed(() => dayjs().year())

  return { thisYear }
}
