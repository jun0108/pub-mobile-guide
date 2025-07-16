<script setup lang="ts">
const exampleLinks = reactive([
  { name: '버튼', path: 'button' },
])
</script>

<template>
  <section class="p-[24px]">
    <h1>UI 컴포넌트 예시</h1>
    <ul>
      <li v-for="link in exampleLinks" :key="link.path">
        <router-link :to="`/example/${link.path}`">{{ link.name }}</router-link>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">

ul {
  margin-top: 16px;
  li + li {
    margin-top: 8px;
  }
}
</style>