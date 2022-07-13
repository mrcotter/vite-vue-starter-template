<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Starter Template</a>
    </div>
    <div class="flex-none">
      <button icon-btn @click="toggleDark()">
        <div dark:i-carbon-moon i-carbon-sun />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toggleDark } from '~/composables'
</script>
