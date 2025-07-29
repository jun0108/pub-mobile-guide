<script setup>
const inputValue = ref('')
</script>

<template>
  <div class="input-demo">
    <h2 class="input-demo__title">Input 상태 예시</h2>
    <div class="input-demo__group">
      <label>기본 상태</label>
      <el-input v-model="inputValue" placeholder="기본 입력" />
    </div>
    <div class="input-demo__group">
      <label>Disabled 상태</label>
      <el-input v-model="inputValue" placeholder="비활성화" disabled />
    </div>
    <div class="input-demo__group">
      <label>Read-only 상태</label>
      <el-input v-model="inputValue" placeholder="읽기 전용" readonly />
    </div>
    <div class="input-demo__group">
      <label>사이즈별 Input</label>
      <div class="flex gap-4">
        <el-input v-model="inputValue" placeholder="Small" class="el-input--sm" style="width: 180px;" />
        <el-input v-model="inputValue" placeholder="Medium" class="el-input--md" style="width: 180px;" />
        <el-input v-model="inputValue" placeholder="Large" class="el-input--lg" style="width: 180px;" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
