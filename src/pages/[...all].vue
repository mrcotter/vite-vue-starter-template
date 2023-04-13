<route lang="yaml">
name: not-found
meta:
  layout: default
</route>

<template>
  <div class="not-found-container">
    <div class="font-medium text-2xl mb-4">
      Page Not Found
    </div>
    <button class="btn btn-primary btn-back m-2" @click="goBack()">
      Back to Home
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function goBack() {
  router.push({ name: 'home' })
}
</script>

<style scoped>
.btn-back {
  min-height: 2rem;
  height: 2.5rem;
}
</style>
