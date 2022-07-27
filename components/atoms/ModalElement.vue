<template>
  <div v-if="isVisible" class="fixed inset-0 flex justify-center items-center">
    <div
      class="bg-black fixed inset-0 opacity-50 transition-opacity z-backdrop"
      @click="handleClose"
    />
    <div :class="['w-auto h-auto z-modal', classModal]"><slot /></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDisableScroll } from '@/composables/useDisableScroll'
defineProps({
  classModal: {
    type: String,
    default: '',
  },
})
const isVisible = ref(true)
const emit = defineEmits(['close'])

function handleClose() {
  console.log('test')
  emit('close')
  isVisible.value = false
}

useDisableScroll(isVisible)
</script>
