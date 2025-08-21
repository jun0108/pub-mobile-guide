<script setup lang="ts">
const props = defineProps({
  name: { type: String },
  extension: { type: String, default: 'svg', required: false },
  alt: { type: String },
  width: { type: String },
  height: { type: String },
})

const iconPath = computed(() => `/src/assets/icon/${props.name}.${props.extension}`)
const iconComponent = computed(() =>
  import.meta.glob('/src/assets/icon/*.svg', { eager: true, import: 'default' })[iconPath.value]
)
</script>

<template>
  <component
    v-if="iconComponent"
    :is="iconComponent"
    class="icon"
    :style="`width: ${width}px; height: ${height}px;`"
  />
  <img
    v-else
    :src="iconPath"
    :alt="props.alt"
    class="icon"
    :style="`width: ${width}px; height: ${height}px;`"
  />
</template>

<style lang="scss" scoped></style>