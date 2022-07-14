<template>
  <footer class="layout-footer footer grid-flow-col items-center p-4 bg-base-200 dark:bg-neutral text-base-content dark:text-neutral-content">
    <div class="items-center grid-flow-col">
      <p class="px-1">
        Copyright © {{ thisYear }}
      </p>
    </div>
    <div class="grid-flow-col gap-4 justify-self-end">
      <a
        class="px-2"
        rel="noreferrer"
        href="https://github.com/mrcotter/vite-vue-starter-template"
        target="_blank"
        title="GitHub"
      >
        <i-carbon-logo-github style="font-size: 1rem" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useDateUtil } from '~/composables'

const { thisYear } = useDateUtil()
</script>
