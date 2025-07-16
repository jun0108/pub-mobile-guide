<template>
  <section>
    <h2>Button Examples</h2>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <button class="btn__full--primary-md">Primary</button>
      <button class="btn__full--secondary-md">Secondary</button>
      <button class="btn__full--negative-md">Negative</button>
      <button class="btn__full--primary-md" disabled>Primary Disabled</button>
      <button class="btn__full--secondary-md" disabled>Secondary Disabled</button>
      <button class="btn__full--negative-md" disabled>Negative Disabled</button>
    </div>
  </section>
</template>

<script setup lang="ts">
// ...필요시 setup 코드...
</script>

<style scoped lang="scss">
// 버튼 스타일은 글로벌로 import되어 있으므로 별도 스타일 없음
section {
  padding: 24px;
}
</style>
