<template>
  <div class="navbar">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Starter Template</a>
    </div>
    <div class="flex-none">
      <button class="btn-toggle-dark px-4" icon-btn @click="toggleDark()">
        <i-carbon-moon v-if="isDark" />
        <i-carbon-sun v-else />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>
