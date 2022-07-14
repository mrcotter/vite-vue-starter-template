<template>
  <div class="layout flex flex-col h-screen" :data-theme="theme">
    <Header />
    <main class="layout-content grow px-4 py-10 text-center">
      <RouterView v-slot="{ Component, route }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" :key="route" />
        </transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables'

const { theme } = useTheme()
</script>
