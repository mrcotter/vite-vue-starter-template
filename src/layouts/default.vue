<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <header />
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <component :is="Component" :key="route" />
      </transition>
    </router-view>
    <footer />
  </main>
</template>
