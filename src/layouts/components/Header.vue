<script setup lang="ts">
import { useLayoutStore } from '~/stores/layout'

const layoutStore = useLayoutStore()

const isDark = ref(false)

function toggleTheme(val: boolean) {
  isDark.value = val
  document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light')
}
</script>

<template>
  <header class="header">
    <button class="toggle-button" @click="layoutStore.toggleSidebar">
      <span class="material-icons">
        {{ layoutStore.isSidebarOpen ? 'menu_open' : 'menu' }}
      </span>
    </button>
    <h1 class="header__title">모바일 가이드</h1>
    <el-switch
      v-model="isDark"
      :active-icon="'dark_mode'"
      :inactive-icon="'light_mode'"
      @change="toggleTheme"
    />
  </header>
</template>

<style lang="scss" scoped>

</style>