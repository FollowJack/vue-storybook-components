<template>
  <div>
    <div class="cursor-pointer" @click="handleClick">
      <slot name="tooltip-anchor" />
    </div>
    <div
      v-if="isVisible"
      role="tooltip"
      class="absolute z-tooltip py-1.5 p-2 rounded shadow transition-opacity duration-300"
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
