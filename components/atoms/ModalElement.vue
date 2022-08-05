<template>
  <div class="fixed inset-0 flex justify-center items-center">
    <BackdropElement @click:backdrop="handleClose" />
    <div :class="['z-modal rounded shadow', classModal]"><slot /></div>
  </div>
</template>

<script setup>
import { onUnmounted } from 'vue'

const emit = defineEmits(['close'])
defineProps({
  classModal: {
    type: String,
    default: '',
  },
})

onUnmounted(() => {
  handleClose()
})

function handleClose() {
  emit('close')
}
</script>
