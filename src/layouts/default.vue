<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
import { useLayoutStore } from '~/stores/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="layout">
    <Header />
    <div class="layout__content">
      <Sidebar :class="{ 'header--open': layoutStore.isSidebarOpen }" />
      <main class="layout__main" :class="{ 'header--open': layoutStore.isSidebarOpen }" >
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
</style>