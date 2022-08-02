<template>
  <div class="fixed inset-0 flex justify-center items-center">
    <div
      class="bg-black fixed inset-0 opacity-50 transition-opacity z-backdrop"
      @click="handleClose"
    />
    <div :class="['z-modal', classModal]"><slot /></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useDisableScroll } from '@/composables/useDisableScroll'
const { setDisableScroll } = useDisableScroll()
const emit = defineEmits(['close'])
defineProps({
  classModal: {
    type: String,
    default: '',
  },
})

onMounted(() => {
  setDisableScroll(true)
})

onUnmounted(() => {
  handleClose()
})

function handleClose() {
  emit('close')
  setDisableScroll(false)
}
</script>
