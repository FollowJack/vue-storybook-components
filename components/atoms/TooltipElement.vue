<template>
  <div>
    <div class="cursor-pointer" @click="handleClick">
      <slot name="tooltip-anchor" />
    </div>
    <div
      v-if="isVisible"
      role="tooltip"
      class="absolute z-tooltip p-1 text-white rounded shadow-sm transition-opacity duration-300 bg-gray-500"
    >
      <slot name="tooltip-content" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggle'])
const isVisible = ref(false)

function handleClick() {
  isVisible.value = !isVisible.value
  emit('toggle', isVisible.value)
}
</script>
