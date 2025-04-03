<script setup lang="ts">
import { useLayoutStore } from '~/stores/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <header class="header">
    <button class="toggle-button" @click="layoutStore.toggleSidebar">
      <span class="material-icons">
        {{ layoutStore.isSidebarOpen ? 'menu_open' : 'menu' }}
      </span>
    </button>
    <h1 class="header__title">모바일 가이드</h1>
  </header>
</template>

<style lang="scss" scoped>
</style>