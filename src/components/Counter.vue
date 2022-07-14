<template>
  <div>
    <span class="mr-4">{{ count }}</span>
    <button class="btn btn-primary btn-sm btn-inc mx-2 px-8" @click="inc()">
      +
    </button>
    <button class="btn btn-primary btn-sm btn-dec mx-2 px-8" @click="dec()">
      -
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>
